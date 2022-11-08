import fs from 'fs'
let fetch = (await import('node-fetch')).default
let axios = (await import('axios')).default;
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(API('https://malesin.xyz', '/tiktok2', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    /*let res = (await axios.get(API('https://malesin.xyz', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;*/
    try {
    let name = conn.getName(m.sender)
    let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${name}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
   await conn.sendButton(m.chat, `
*Username:* ${res.author}
*Judul:* ${res.title}`, wm, await (await fetch(res.video)).buffer(), [[`Audio`, usedPrefix + `ta ${text}`]], fkontak)
} catch { m.reply('terjadi kesalahan') }
}
    
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

export default handler
