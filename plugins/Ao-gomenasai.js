import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './src/sound/gomenasai.mp3'
conn.sendFile(m.chat, vn, 'gomenasai.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Gomenasai/
handler.help = ['Gomenasai']
handler.tags = ['audio']
handler.limit = 1
handler.register = true
handler.command = new RegExp
export default handler
