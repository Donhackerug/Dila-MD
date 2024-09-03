const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LV9TBYYT#HpIafCcEZ8HaGbpor6S4AVsksUtps4HCF5IsY_Oq8Gg",
MONGODB: process.env.MONGODB || "",
};
