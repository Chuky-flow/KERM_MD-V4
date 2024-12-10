const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "[10/12, 6:22 PM] Dabenz L'homme Tracka: SQoxlSpK#n83FcfrABP6J41B8Fid1q62U8lLnAMx0XZKlwOBXgBo
[10/12, 6:22 PM] Dabenz L'homme Tracka: ☝🏽☝🏽☝🏽𝖪𝖤𝖱𝖬 𝖬𝖣 𝖵𝟦 𝖲𝖤𝖲𝖲𝖨𝖮𝖭 𝖨𝖲 𝖲𝖴𝖢𝖢𝖤𝖲𝖲𝖥𝖴𝖫𝖫𝖸 𝖢𝖮𝖭𝖭𝖤𝖢𝖳𝖤𝖣✅

> 𝖣𝗈𝗇’𝗍 𝖲𝗁𝖺𝗋𝖾 𝖳𝗁𝗂𝗌 𝖲𝖾𝗌𝗌𝗂𝗈𝗇 𝖶𝗂𝗍𝗁 𝖲𝗈𝗆𝖾𝗈𝗇𝖾

> 𝖩𝗈𝗂𝗇 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 𝖭𝗈𝗐:https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45


> ©️𝖯𝖮𝖶𝖤𝖱𝖤𝖣 𝖡𝖸 𝖪𝖦𝖳𝖤𝖢𝖧",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/osriwc.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR IM ONLINE I'M KERM_MD-V4 WHATSAPP BOT\n\n> 𝖡𝖸 𝖪𝖦𝖳𝖤𝖢𝖧",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "➺『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩4』࿐",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
