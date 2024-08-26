const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "dilo",
    desc: "Check if the bot is online.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let status = `*Name*: Dilan
*From*: Matara
*Age*: 20
*Web*: dilalk.vercel.app

_you .....?_ ♥✊`;

        const imageUrl = 'https://telegra.ph/file/dcd097f9f7a124d47e5b2.jpg';
        const audioUrl = 'https://drive.google.com/uc?export=download&id=1YYPnkKWdrxFe8C2kWdwf8qkeE0PO5RjW';

        // Send the image with the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

        // Send the voice recording
        await conn.sendMessage(from, {
            audio: { url: audioUrl }, // Direct download link for the voice recording
            mimetype: 'audio/mp4', // Adjust this if your audio file is in another format
            ptt: true // This makes the audio act like a voice note
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
