import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './src/sound/Onichanhentai.mp3'
conn.sendFile(m.chat, vn, 'Onichanhentai.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Onichanhentai/
handler.help = ['Onichanhentai']
handler.tags = ['audio']
handler.limit = 1
handler.register = true
handler.command = new RegExp
export default handler
