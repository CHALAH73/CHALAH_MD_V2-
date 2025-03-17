const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://i.ibb.co/prKWGKfJ/SulaMd.jpg';

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "Get Bot Menu",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
      *Hi 🔐*  *${pushname}*
      
    *CHALAH MD V2  Command List*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

  *╭────────────●●►*
  *│1. DOWNLOAD MENU*
  *│2. SEARCH MENU* 
  *│3. AI MENU*
  *│4. OWNER MENU*
  *│5. GROUP MENU*
  *│6. INFO MENU*
  *│7. CONVERTER MENU*
  *│8. RANDOM MENU*
  *│9. WALLPAPERS MENU*
  *│10. OTHER MENU*
  *╰────────────●●►*

> CHALAH MD V2 
`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-MENU 📥* *❒⁠⁠⁠⁠* 
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2 🤖
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-MENU 🔍* *❒⁠⁠⁠⁠* 
*┋* *tiktokstalk*
*┋* *tiktoksearch*
*┋* *movie*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2 💐
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 AI-MENU 🧠* *❒⁠⁠⁠⁠* 
*┋* *ai*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2💐
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-MENU 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *update*
*┋* *restart*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2💐
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 GROUP-MENU 👥* *❒⁠⁠⁠⁠* 
*┋* *kickall*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2🤖
`;

                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *💾 INFO-MENU 💾* *❒⁠⁠⁠⁠* 
*┋* *alive*
*┋* *menu*
*┋* *ping*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2 
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔄 CONVERTER-MENU 🔄* *❒⁠⁠⁠⁠* 
*┋* *tts2*
*┋* *tourl*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-MENU ⛱️* *❒⁠⁠⁠⁠* 
*┋* *hack*
*┋* *weather*
*┋* *news*
*┋* *hirucheck*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-MENU 🏜️* *❒⁠⁠⁠⁠* 
*┋* *animegirl1*
*┋* *animegirl2*
*┋* *animegirl3*
*┋* *animegirl4*
*┋* *animegirl5*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-MENU 🌐* *❒⁠⁠⁠⁠* 
*┋* *pair*
*┋* *Coming Soon*
*╰───────────────────❒*

> CHALAH MD V2
`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
