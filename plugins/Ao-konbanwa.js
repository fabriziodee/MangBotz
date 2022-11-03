import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './src/sound/konbanwa.mp3'
conn.sendFile(m.chat, vn, 'konbanwa.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Konban?wa/i
handler.help = ['Konbanwa']
handler.tags = ['audio']
handler.limit = 1
handler.register = true
handler.command = new RegExp
export default handler
