module.exports = {
    name: "ban",
    description: "ban a member",
    syntax: "`ban` <user>",
    async execute(client, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`${message.author}, you don't have permission to use this command!`);
        }
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`${message.author}, I don't have ban permissions!`);
        }
        let toban = message.mentions.members.first();
        try {
            await toban.ban();
            message.channel.send(`:white_check_mark:${toban.displayName} was banned! :point_right:`);
        } catch {
            message.channel.send(`Could not ban ${toban.displayName}!`);
        }
    },
};
