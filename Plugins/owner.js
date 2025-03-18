const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "🤖", // Reaction emoji when the command is triggered
    alias: ["silent", "pasi"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+94776938009'; // Replace this with the actual owner number
        const ownerName = 'CHALAH 🍂'; // Replace this with the owner's name
        const organization = '*𝐗-𝐓𝐄𝐀𝐌*'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `*_ᴛʜɪꜱ ɪꜱ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴏɴᴛᴀᴄᴛ ʜɪᴍ_*: ${ownerName}`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+94776938009') + '+94784919934@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek });
    }
});
