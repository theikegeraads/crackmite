const Commando = require('discord.js-commando');
const fs = require('fs');
const path = require('path');

const {
    token
} = require('./config.json');

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
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

	if (err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if (jsfile.length <= 0) {
		return console.log("[LOGS] Couldn't find commands!");
	}

	jsfile.forEach((f, i) => {
		let pull = require(`./commands/${f}`);
		client.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			client.aliases.set(alias, pull.config.name);
		});
	});
});


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const command = args.shift().toLowerCase();
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if (commandfile) commandfile.run(client, message, args);
});


client.login(token).then().catch(`Error logging in: ${console.error}`);