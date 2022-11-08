import fs from 'fs'
let fetch = (await import('node-fetch')).default
let axios = (await import('axios')).default;
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    /*let kos = (await axios.get(API('https://malesin.xyz', '/tiktok2', { url: args[0] } ))).data;
    if (kos.status != 200) throw kos.message;
    if (!kos) throw kos.message;*/
    let res = (await axios.get(API('https://malesin.xyz', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    try {
    let name = conn.getName(m.sender)
    let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${name}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
   await conn.sendButton(m.chat, `
*Username:* ${res.author}
*Judul:* ${res.title}`, wm, await (await fetch(res.video)).buffer(), [[`Okay`, `Sector`]], fkontak)
} catch { m.reply('terjadi kesalahan') }
}
    
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

export default handler

/*let { tiktokdl, tiktokdlv2, tiktokdlv3 } = require ('@bochilteam/scraper')
let fetch = require ('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    await conn.sendFile(m.chat, url, 'tt.mp4', `
- *ɴɪᴄᴋɴᴀᴍᴇ:* ${nickname}
- *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:*
${description}
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
    
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

module.exports = handler*/
