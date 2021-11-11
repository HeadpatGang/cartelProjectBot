const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fox')
        .setDescription('Random fox'),
    async execute(interaction) {
        await interaction.deferReply();
        const { image } = await fetch('https://randomfox.ca/floof').then(response => response.json());
        interaction.editReply({ files: [image] });
    }
}
