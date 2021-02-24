const emo = require('../../src/emojis.js');

module.exports.run = async (client, message) => {
    if (message.author.id === '230400499592069120') {
        await message.channel.send("Restarting...");
        await process.exit();
    } else {
        return message.reply(`only Neo can reboot me ${emo.wtfEyes}`);
    }
};

module.exports.help = {
    name: "restart",
    aliases: ['rs'],
    description: "Restart the bot",
    category: 'public',
    roles: [''],
    cooldown: 10,
    usage: '',
};