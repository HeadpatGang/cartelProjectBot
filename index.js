const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const { 
    databaseConnection,
    commandHandler
} = require('./modules/index');
require('dotenv').config();
const discordAuthToken = process.env.discordAuthToken;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

client.once('ready', () => {
    console.log(`Client has logged in on ${client.guilds.cache.size} Guilds`)
    client.user.setPresence({
        activities: [{
            name: 'Lofi Music to Purge Heretics To',
            type: 'LISTENING',
            url: 'https://www.youtube.com/watch?v=E1Xn-swJ8v4'
        }]
    })
    commandHandler(client, Collection)
})

client.login(discordAuthToken)