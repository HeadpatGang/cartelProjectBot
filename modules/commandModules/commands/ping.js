const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Testing purpose'),
    async execute(interaction) {
        await interaction.reply({ content: 'Pong!'})
    }
}