# Behind The Scenes - E Commerce (BTS - E Commerce)

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description:
* Need a backend application for you E-Commerce site? BTS - E Commerce is just the application for you! Utilizing MySQL, Sequelize, Express, and Dotenv, this application will making your stock and inventory problems no more! 

## Tables of Contents:
* [Technologies](#technologies)
* [NPM Packages](#npm-packages)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Usage](#usage)
* [Author(s)](#authors)
* [Contact Info](#contact-info)

## Technologies:
* JavaScript

## NPM Packages:
* [dotenv v8.2.0](https://www.npmjs.com/package/dotenv/v/8.2.0)
* [express v4.17.1](https://www.npmjs.com/package/express/v/4.17.1)
* [mysql2 v2.1.0](https://www.npmjs.com/package/mysql2/v/2.1.0)
* [sequelize v5.21.7](https://www.npmjs.com/package/sequelize)
*Please note that Sequelize v5.21.7 is no longer available (EOL) since v6 has been the current version. Link provided above is for the most current version*

## Screenshot:


## Installation:
* Download the zip file, or clone to your local machine.
* Open a new terminal in the correct directory, and run command: `npm i`
* Create a `.env` file; Populate the file with `DB_NAME` - `DB_USER` - `DB_PW` on separate lines, and insert your appropriate credentials.

## Usage:
* After you finish installation procedures, enter the following command in the terminal: `mysql -u (*insert username*) -p`
* Please enter your MySQL password when prompted.
* In the MySQL command line, use command: `source db/schema.sql;` to create the proper database.
* After the prompt displays the database was created, use command: `quit;` to exit the MySQL Command Line.
* Lastly, use commands: `npm run seed` - `npm start` to seed your Database, and to start the server respectively. 

## Author(s):
* Jeffrey Young

## Contact Info:
[GitHub](https://github.com/jeffymiyoung)

---
© 2022 BTS - E Commerce