const { AoiClient } = require('aoi.js');
const bot = new AoiClient({
  token: 'MTQxMDUzMDMwOTM2MzIwODIxMw.GKob7V.UCZKSn1hueR67LH377ob_luPui1dgRFEzje5qI',
  prefix: '!',
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
});

// Load commands from the commands folder
bot.loadCommands('./commands/');

// Cooldowns
bot.cooldowns = new Map();

// Blacklist
const blacklist = {
  users: ['USER_ID_1', 'USER_ID_2'],
  servers: ['SERVER_ID_1', 'SERVER_ID_2']
};

// Event: Message
bot.onMessage();

// Check for blacklisted users and servers
bot.onMessage((message) => {
  if (blacklist.users.includes(message.author.id) || blacklist.servers.includes(message.guild.id)) {
    return message.reply("You are blacklisted from using this bot.");
  }
});
