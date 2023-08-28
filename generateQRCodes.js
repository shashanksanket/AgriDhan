const XLSX = require('xlsx');
const fs = require('fs');
const QRCode = require('qrcode');


const workbook = XLSX.readFile('AgriDhan.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const data = XLSX.utils.sheet_to_json(worksheet);

data.forEach(async (row, index) => {
  try {
    const qrText = JSON.stringify(row);
    const qrCodePath = `qrcodes/qrcode_${index+1}.png`;

    await QRCode.toFile(qrCodePath, qrText);

    console.log(`Generated QR code for row ${index+1}`);
  } catch (error) {
    console.error(`Error generating QR code for row ${index+1}:`, error);
  }
});



const qrCodeDirectory = 'qrcodes';

const dataURIs = [];

fs.readdirSync(qrCodeDirectory).forEach((file) => {
  if (file.endsWith('.png')) {
    const imagePath = `${qrCodeDirectory}/${file}`;
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    const dataURI = `data:image/png;base64,${base64Image}`;
    dataURIs.push(dataURI);
  }
});

console.log(dataURIs);
const excelFilePath = 'UpdatedAgriDhan.xlsx'; 




data.forEach((row, index) => {
  if (dataURIs[index]) {
    row.QRCodeDataURI = dataURIs[index]; 
  }
});

const updatedWorksheet = XLSX.utils.json_to_sheet(data);
const updatedWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(updatedWorkbook, updatedWorksheet);

XLSX.writeFile(updatedWorkbook, excelFilePath);

