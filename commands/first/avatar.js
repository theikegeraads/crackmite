const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			group: 'first',
			memberName: 'avatar',
			description: 'Shows you your avatar.'
		});
	}

	run(message) {
		return message.reply(message.author.avatarURL);
	}
};