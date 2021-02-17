const fs = require('fs');

module.exports.run = async (client, message, args) => {
    
    const amount = parseInt(args[0]) + 1;
    
    if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number');
    }
    else if (amount <= 1 || amount > 100) {
        return message.reply('you need to input a number between 1 and 99.');
    }

    message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send('there was an error trying to clear messages in this channel!');
    });

};

module.exports.help = {
    name: "clear",
    aliases: ['c'],
    category: 'public',
    roles: ['Leader', 'Officer', 'Guild Event Organizer'],
    description: "Clears from 1 to 100 messages",
    cooldown: 1,
    usage: '[amount]',
};