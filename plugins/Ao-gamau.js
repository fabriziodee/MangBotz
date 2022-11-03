import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './src/sound/gamau.mp3'
conn.sendFile(m.chat, vn, 'gamau.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Gamau/
handler.help = ['Gamau']
handler.tags = ['audio']
handler.limit = 1
handler.register = true
handler.command = new RegExp
export default handler
