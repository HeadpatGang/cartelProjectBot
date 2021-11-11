const fs = require('fs');
const crafterSelect = require('../selectMenuGenerator/crafterSelect')
const crafterData = require('../commandModules/commands/crafter')
const crafterEmbed = require('../embedGenerator/crafterEmbed')
const craftingEmbed = require('../embedGenerator/craftingEmbed')
const refiningEmbed = require('../embedGenerator/refiningEmbed')
const gatheringEmbed = require('../embedGenerator/gatheringEmbed');

module.exports = function(client, Collection) {
    client.commands = new Collection();
    const commandFiles = fs.readdirSync('./modules/commandModules/commands/').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.data.name, command)
    }

    //Handles the command input.
    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand() && !interaction.isContextMenu() && !interaction.isSelectMenu() && !interaction.isAutocomplete()) return;
        if (!interaction.inGuild()) return;
        if (interaction.customId === 'select') {
            //Re-do this, it's godawful & can be done via export, but it works for now, but please do change...
            let x = interaction.values[0]
            const discordID = crafterData.crafterData.crafter[0].discordID
            const playerName = crafterData.crafterData.crafter[0].playerName
            const crafter = crafterData.crafterData.crafter[0]
            const crafting = crafterData.crafterData.crafting[0]
            const refining = crafterData.crafterData.refining[0]
            const gathering = crafterData.crafterData.gathering[0]
            switch(x) {
                case 'Crafter':
                    console.log(interaction.member.id)
                    console.log(interaction.user.id)
                    crafterEmbed(crafter, interaction, discordID);
                    break;
                case 'Crafting':
                    craftingEmbed(crafting, interaction, discordID, playerName);
                    break;
                case 'Refining':
                    refiningEmbed(refining, interaction, discordID, playerName);
                    break;
                case 'Gathering':
                    gatheringEmbed(gathering, interaction, discordID, playerName);
                    break;
                default:
                    console.log('None selected')
                    break;
            }
        }

        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            console.log(error)
        }

        if (interaction.commandName === 'crafter') {
            crafterSelect(crafterData, interaction)
        }  
    })

}
