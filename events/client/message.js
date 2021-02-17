const { Collection } = require('discord.js');
const { prefix } = require('./../../config');

module.exports = (client, message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.mentions.users.first();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) return;

    // Security Permissions
    /*if (command.help.permissions && !message.member.hasPermission('ADMINISTRATOR')) { return message.reply('tu n\'as pas les permissions pour utiliser cette commande.'); }*/

    // Args
    /*if (command.help.args && !args.length) {
        let noArgsReply = `Il faut des arguments pour cette commande, ${message.author}!`;

        if (command.help.usage) noArgsReply += `\n Voici comment utiliser la commande: \`${prefix}${command.help.name} ${command.help.usage}\``;

        return message.channel.send(noArgsReply);
    }*/

    // Mention
    /*if (command.help.isUserAdmin && !user) { return message.reply('Il faut mentionner un utilisateur.'); }*/

    // Permissions isUserAdmin
    /*if (command.help.isUserAdmin && message.guild.member(user).hasPermission('ADMINISTRATOR')) { return message.reply('tu ne peux pas utiliser cette commande sur cet utilisateur.'); }*/

    // Roles
    if (command.help.roles != '' && command.help.roles != undefined) {
        let userHasRole = false;
        for (var i = command.help.roles.length - 1; i >= 0; i--) {
            if (message.member.roles.cache.find(r => r.name === command.help.roles[i])) {
                userHasRole = true;
                break;
            }
        }
        if (!userHasRole) return message.reply(`you don't have the permission to execute this command`);
    }

    // Cooldowns
    if (!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection());
    }

    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmout = (command.help.cooldown || 5) * 1000;

    if (tStamps.has(message.author.id)) {
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmout;

        if (timeNow < cdExpirationTime) {
            const timeLeft = (cdExpirationTime - timeNow) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(0)} second(s) before re-using that command`);
        }
    }

    tStamps.set(message.author.id, timeNow);
    setTimeout(() => tStamps.delete(message.author.id), cdAmout);

    command.run(client, message, args);
};