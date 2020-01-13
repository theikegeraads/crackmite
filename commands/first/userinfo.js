const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const colours = require("../../colours.json");
const moment = require('moment')

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'userinfo',
			group: 'first',
			memberName: 'userinfo',
			description: 'Shows you your userinfo.'
		});
	}

	run(message) {
		let user = message.author;
        var userinfo = new Discord.RichEmbed()
            .setAuthor(user.tag, user.avatarURL)
            .setThumbnail(user.avatarURL)
            .setColor("red_light")
            .addField("Username:", user.username)
            .addField("Status:", user.presence.status)
            .addField("Joined at:", moment(message.guild.members.get(user.id).joinedAt).format("MMMM Do YYYY, h:mm a"))
            .addField("Registered at:", moment(user.createdAt).format("MMMM Do YYYY, h:mm a"))
        message.channel.send(userinfo);
	}
};