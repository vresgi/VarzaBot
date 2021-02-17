module.exports.run = async (client, message) => {
    await message.channel.send("Restarting...");

    await process.exit();
};

module.exports.help = {
    name: "reboot",
    aliases: ['reboot'],
    category: 'moderation',
    description: "Redémarre le bot",
    cooldown: 30,
    usage: '',
    permissions: true,
    isUserAdmin: false,
    args: false
};