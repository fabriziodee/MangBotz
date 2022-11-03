let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} 2
Max Angka 70
*Hanya Angka*`

let vn = `https://hansxd.nasihosting.com/sound/sound${text}.mp3`
await conn.sendFile(m.chat, vn, 'song.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})

}
handler.help = ['sound <angka>']
handler.tags = ['audio']
handler.command = /^(sound)$/i
handler.limit = true
handler.register = true
export default handler

