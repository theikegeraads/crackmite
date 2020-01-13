const Discord = require('discord.js')
const { Command } = require('discord.js-commando');
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hej',
            group: 'first',
            memberName: 'hej',
            description: 'Replies with the text you provide.',
            args: [
                {
                    key: 'text',
                    prompt: 'hippity hop',
                    type: 'string',
                },
            ],
        });
    }

    run(message, { text }) {
        const Discord = require('discord.js')
        const { Command } = require('discord.js-commando');
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let sender = message.author
        let mention = message.mentions.users.first()

        if(args[0] == "all") return message.channel.send(`EVERYONE DIEKEEEEEEEEEEEE`)
        if(!mention) return message.channel.send(":sunglasses: DIEKEEEEEEEEEEEEE")
        if(mention.id == sender.id) return message.channel.send("NO YOU DIEKEEEEEEEEEEEE")
        message.channel.send(`:sunglasses: <@${mention.id}> DIEKEEEEE`)
    }
}