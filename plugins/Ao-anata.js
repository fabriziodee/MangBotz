import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './src/sound/anata.mp3'
conn.sendFile(m.chat, vn, 'anata.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Anata/
handler.help = ['Anata']
handler.tags = ['audio']
handler.limit = 1
handler.register = true
handler.command = new RegExp
export default handler
