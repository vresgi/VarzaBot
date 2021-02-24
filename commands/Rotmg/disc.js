const Discord = require(`discord.js`);
const fs = require('fs');
const emo = require('../../src/emojis.js');

module.exports.run = async (client, message, args) => {
    const tab = [
        `https://cdn.discordapp.com/attachments/684613863911456783/766840262902677544/NOT_A_DIVINITY.mp4`,
        `https://cdn.discordapp.com/attachments/511193076224491524/766843456772636722/disc_bs.mp4`,
        `https://cdn.discordapp.com/attachments/511193076224491524/812547557145837568/disc_pepega.mp4`
    ];

    const num = Math.floor(Math.random() * tab.length);
    message.channel.bulkDelete(1, true).catch(err => {
        console.error(err);
    });
    message.channel.send(tab[num]);
};

module.exports.help = {
    name: "disc",
    description: ":b:isk",
    aliases: ['disk', 'discipile', 'bisc', 'bisk'],
    category: 'rotmg',
    roles: [''],
    cooldown: 3,
    usage: '',
};