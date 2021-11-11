const { MessageEmbed } = require('discord.js')

module.exports = function(crafting, interaction, discordID, playerName,) {
    this.crafting = crafting;
    this.craftingEmbed = new MessageEmbed()
    .setTitle(`${playerName} Crafting Stats`)
        .setColor('#ffb6c1')
        .addFields(
            { name: 'Weaponsmithing', value: `${crafting.weaponsmithing}`, inline: true},
            { name: 'Armoring', value: `${crafting.armoring}`, inline: true},
            { name: 'Engineering', value: `${crafting.engineering}`, inline: true},
            { name: 'Jewelcrafting', value: `${crafting.jewelcrafting}`, inline: true},
            { name: 'Arcana', value: `${crafting.arcana}`},
            { name: 'Cooking', value: `${crafting.cooking}`, inline: true},
            { name: 'Furnishing', value: `${crafting.furnishing}`, inline: true},
        )
        .setFooter(`${discordID}`);
        console.log('Crafting selected')
        interaction.update({ content: `${playerName}'s ${interaction.values[0]} Stats`, embeds: [this.craftingEmbed], ephemeral: true})
}