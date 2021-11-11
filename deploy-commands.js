const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./json/config.json');
const { clientID, guildID } = config.client;
require('dotenv').config();
const discordAuthToken = process.env.discordAuthToken;

const commands = [];
const commandFiles = fs.readdirSync('./modules/commandModules/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./modules/commandModules/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(discordAuthToken);

rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);