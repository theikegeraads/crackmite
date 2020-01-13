const Commando = require('discord.js-commando');

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
    client.user.setStatus('idle');
});
client.login(token).then().catch(`Error logging in: ${console.error}`);
