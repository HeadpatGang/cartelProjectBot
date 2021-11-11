const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('crafter')
        .setDescription('Finds a crafter based on Player Name OR Discord ID')
        .addStringOption(option =>
            option.setName('discordid')
                .setDescription('In-game Name of Crafter')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply()
        var discordID = interaction.options.getString('discordid')
        const crafterData = await fetch(`http://127.0.0.1:8000/api/crafter/${discordID}`).then(response => response.json());
        module.exports.crafterData = crafterData;
        module.exports.discordID = discordID;
        module.exports.playerName = crafterData.crafter[0].playerName;
        if (!Object.keys(crafterData).length) {
            return interaction.editReply(`No crafter found with ${discordID}`)
        }
        interaction.editReply({content: `${this.playerName} found, use this menu to show stats!`, ephemeral: true})
    }
}