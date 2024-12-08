//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2349066087749";
global.owner = process.env.OWNER_NUMBER || "2349066087749";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK01XSXVyTDFrL3lGcWJKeTRkKzF6QU9Nd1lsS240VzJWdEs3T2VGWG5GQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFB2NTRvVTVlbXNHTWpobXpaU1JJVzJKVmNHMkl5aHBHQ2RiTFZpQVduTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Sy9RNStBK3VRUU15aDMxZ0xmd3ZWUTVFQUordnB2YVkvUDJlM080Um00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTDB1ZWdEWmFzOXBIbCthcm5VSE1NejZUS0d4cDFMSEFJOGdFNXhBcVIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HZy9IN0xDWHJ1MlkvVUxMZUp0R1hiMWpKZStoSzFxbHdtRjdDQ1IzVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhZSkNNZFdaWlhGZmsxNTE4VWxzNE1ReEZIczVFN1B1VXlsQUVvNWJkUjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUcrdk9HS1hCNVZTUmhMQ3UydGhBRUlrMVduNHRxVUg1ZGxxbkhXYVpWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFh4T05nalR0K2xZbUtmZGRIblhtVXdZNUQ2eXNDalFPQXY5OS96cXJWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZuME9nazJNVi95K2J3a0hVRllFVWREelcxdG5xSEVOT0dpcWFyb051SXVpV0s0bDZlRWV1SDdPYk1Rdnh4b3NnZzIrdEZ5TlYyMERmYmFoTzZORUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiJQbzk1R0hTSmxmOXZlV3paSHFxOENlY3p4bTVpTjRBSit4ODlMUTZidDB3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjYwODc3NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUMzRjRCRDAxQzZDNDg3OEQ2RUFCMTcxQjlBODJBQzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDY0NDcwNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVE9xY0ZDRGJRWmEtdERBNlRpVjVldyIsInBob25lSWQiOiJkMWU4MmQ4YS0zMDYzLTQyYjYtYTBkMy0wNjRmMTU5OWQyYWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZBRS93WUhRaFFZMUwxMjMwK2hET1RSWXR3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJzZ2kxbDRvMk9qQmp6Uk1RaENDTW13UDkwVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3RVdBVFc1RSIsIm1lIjp7ImlkIjoiMjM0OTA2NjA4Nzc0OTo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhlZHdpZyDwn4y58J+eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0d0UnBGVFFzL2M5Y3N1dkdyTzkrMFJPMWJNZ0ZPdGkxMzY4bFEydjQwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjUvV3JHWkxNb05Hd2xJa1ZkZlo2cmltZGlOQ3Yza0JtVno4TXdQM3Rucz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSHRwTm1PREdGbFR3S0k0b1VzTEVoQWxSczk5S2xGSHFDQysxcVAwd2s4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQNzBxS1pkbUl2akpJbzJXZmR3NzlEdGZnMnFncmZOWUREbHJJZHc0cW5rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHNGVpK2wrREVuSG9LTEhKYW9oVi92TUZHU08veHp3WEd5WDM3eWNaV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB2emprdGlNd09QQ1Y3dmFmcjJDTGRpSGxBWk0xMklySkdjaXNkVmtjakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05uOEVyQVVNTzh2UU1PS00zbmR5TGlRTDBDblUyTCs5N2NBTWZTc2ZtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXhKRXJyL1ZzUWRlN1BjakRLMDdqdlluSlpyWit5OHRXK2hUU04yOWh6bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR2S2U0SGpEMkZHRnZXUTdpTWc3UlRQc0JrWmh3UEVHT09ac2ZYWTV3UXN2dDdHMnBVMTNKQ2IrdUFCR09oZWo0Q0tWSmRoZW5xQkJ1T0wrcm90MWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiI2MEFhUUczQ284aWZ5aVorRzlndU1DVTJMRkw2M096b0p3b2xjT00wWjVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJQ2RMUlR2MFIwcWJzZmFYRU9uV0R3IiwicGhvbmVJZCI6ImE2NTRjZTZkLWNiMzQtNDA4Zi1hMDI5LTc3ZmNhODE5OTkyZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxeDluTTBZQUtwNmthZENCTWIydHZiRldhRTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjQrMnZBcXBoVnJqWmJobER1VHQyOE1RWE00PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRZRkQ1MVRHIiwibWUiOnsiaWQiOiIyMzQ5MDY2MDg3NzQ5OjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmTy9NWUdFSWFaMXJvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVCK00wQ3NpK1ZzN0JqWUdnc1VLSGxwcGtqYmtFektNczhRNXZDdER2eDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhGUkhIRFg5TzZmZkdHQ3Q3U2VzZXdvRWJKS2dXNVkrQjJxNHF3YzFlc2lySkRhVlphM1UwS3M1aVcySms2MFMrcmRIei9OWlY1U2tHNEFrNi9tbENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPSVlKVjNxMFJnUXJINVdDTVJRS2Zoa2R5R1BTR0FUUlEvb1Jqa2toc1RJNmRrc2w4NkxEYkYvY2VOZkNralA1b013RTV3T3NLOVUyTmtQOUdwTkhpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNjYwODc3NDk6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUWZqTkFySXZsYk93WTJCb0xGQ2g1YWFaSTI1Qk15akxQRU9id3JRNzhkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzNjU5Nzk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5PSyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
