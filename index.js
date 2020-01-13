const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const { token } = require('./config.json')

const client = new CommandoClient({
	commandPrefix: '>',
	owner: ['465662909645848577', '464733215903580160']
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['first', 'Your First Command Group']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);

client.login(token);