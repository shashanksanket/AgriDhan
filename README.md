# Agnidhan: Farmer Land Details QR Code Generator

This is a prototype project developed for the Pitch to SBI Hackathon. The project aims to streamline the process of generating QR codes for the land details of farmers. The generated QR codes can be scanned to quickly access the corresponding land information. This README provides an overview of the project's structure, setup instructions, and usage.

## Table of Contents

- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies Used](#Technologies-Used)
- [Setup](#Setup)
- [Usage](#Usage)
- [Demo Data](#Demo-Data)
- [Future Enhancements](#Future-Enhancements)
- [Application Screenshots](#Application-Screenshots)

## Introduction

This is a plain JavaScript Node.js application that generates QR codes for the land details of farmers. It takes farmer information from an Excel sheet and creates a QR code for each farmer, embedding their land details. This project will be designed to simplify the access and sharing of land information among stakeholders in coming days.

## Features

- Generates QR codes for farmer land details.
- Each QR code contains relevant land information.

## Technologies Used

- ReactNative
- Node.js

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/agnidhan.git](https://github.com/shashanksanket/AgriDhan.git
   cd agnidhan
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the application to generate QR codes:
   ```bash
   node generate_qrcodes.js
   ```

2. QR codes will be generated for each farmer and saved in the `qrcodes` directory.


## Demo Data

For demonstration purposes, a sample Excel sheet named `demo_farmer_data.xlsx` is provided in the repository. This sheet contains mock data that represents farmer land details. QR codes will be generated based on this data when you follow the usage instructions.

## Future Enhancements

- Implement a app interface for storing real time data of farmers and generating QR codes.
- Add a database to store and manage farmer information.
- Improve the formatting and design of the generated QR codes.


## Application Screenshots

![d8bf80ab-8896-4cdf-b8f4-64381cd88879](https://github.com/shashanksanket/AgriDhan/assets/40575030/595e9b43-f0de-419a-9e97-7a1c930ab54f)

![9986befa-c1dc-40c4-8ec7-705493bf2626](https://github.com/shashanksanket/AgriDhan/assets/40575030/b98d4ddc-5730-4b0a-ab5b-d0133aa0f5f4)



