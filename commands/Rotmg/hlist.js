const fs = require('fs');

module.exports.run = async (client, message, args) => {
    if (args.length === 0) {
        return message.reply('https://pastebin.com/AkRfw6pD');
    } else if (args.length === 1) {
        const name = args[0].toLowerCase();

        fs.readFile('./src/hackersList.txt', function read(err, data) {
            if (err) {
                throw err;
            }
            const content = data.toString().toLowerCase().split('\r\n');
            //console.log(content);
            //console.log(name);
            if (content.includes(name)) return message.channel.send(`${args[0]} is in the list`);
                return message.channel.send(`${args[0]} is not in the list`);
        });
    } else {
        return message.reply(`You can only give one name as argument`);
    }
};

module.exports.help = {
    name: "hlist",
    aliases: ['hl'],
    category: 'rotmg',
    roles: ['Leader', 'Officer', 'Guild Event Organizer'],
    description: "Gives the link of the cheaters' list that has been published by someone who made a hacked client with a (sort of) keylogger in it",
    cooldown: 1,
    usage: '[name]',
};