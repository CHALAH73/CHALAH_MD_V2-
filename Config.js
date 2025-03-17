const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
STATUS_READ_MSG: process.env.STATUS_READ_MSG || "Chalah Md V2💚",
FOOTER: process.env.FOOTER || "CHALAH MD V2💚",
MODE: process.env.MODE || "public",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
JID: process.env.JID || "120363414353076763@newsletter",
IMAGE_LIMIT: process.env.IMAGE_LIMIT || "3",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/LDkGq0DT/SulaMd.jpg",
SESSION_ID: process.env.SESSION_ID || "JiljkTIR#6X-5R4sOYP2DAl0lxbiAZvVk0yH5iFdfmyajOc7GlcI",
OWNER_NUMBER: process.env.SESSION_ID || "94776938009",
PREFIX: process.env.PREFIX || ".",
ANTI_DELETE: process.env.ANTI_DELETE || "true"
};

