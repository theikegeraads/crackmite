const Discord = require('discord.js')
const Commando = require('discord.js-commando');
const fs = require('fs');
const path = require('path');
const { prefix, token } = require('./config.json');

const client = new Commando.Client({
    owner: ['465662909645848577', '464733215903580160'],
    disableEveryone: true,
    commandPrefix: '>',
    unknownCommandResponse: false
});

client.registry.registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        unknownCommand: false
    });


client.once('ready', () => {
    console.log(`Ready! Currently in ${client.guilds.size} guilds.`);
    client.user.setStatus('dnd');
    client.user.setActivity('>', {
        type: 'LISTENING'
    });
});

client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
    
client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.on('message', async message => {
	if (message.author.bot) return;
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


client.aliases = new Discord.Collection();


client.on('message', async message => {
    let prefix = ".";
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const command = args.shift().toLowerCase();
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if (commandfile) commandfile.run(client, message, args);
});


client.login(token).then().catch(`Error logging in: ${console.error}`);