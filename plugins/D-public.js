import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.public()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['publik']
handler.tags = ['nsfw']
handler.command = /^(publik)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
