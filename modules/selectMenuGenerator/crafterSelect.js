const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = function(crafterData, interaction) {
    const crafter = crafterData.crafterData.crafter[0]
    const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder(`Click me!`)
        .addOptions([
            {
                label: 'Crafter Information',
                description: `Information about ${crafter.playerName}`,
                value: 'Crafter',
                emoji: '<:Arcanist:867460087546249248>'
            },
            {
                label: 'Crafting Information',
                description: `Crafting Information about ${crafter.playerName}`,
                value: 'Crafting',
                emoji: '<a:thisdiscocat:905555662430408764>'
            },
            {
                label: 'Refining Information',
                description: `Refining Information about ${crafter.playerName}`,
                value: 'Refining',
                emoji: '<a:walkingfurret:905556024168177675>'
            },
            {
                label: 'Gathering Information',
                description: `Gathering Information about ${crafter.playerName}`,
                value: 'Gathering',
                emoji: '<a:smallmeow:905556092283682868>'
            },
        ]),
    );
    console.log(row)
    module.exports.row = row;
    interaction.editReply({ components: [row], ephemeral: true})
}
