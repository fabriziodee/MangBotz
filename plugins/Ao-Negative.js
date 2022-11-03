import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './src/sound/Negative.mp3'
conn.sendFile(m.chat, vn, 'Negative.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Negative/
handler.tags = ['audio']
handler.help = ['Negative']
handler.limit = 1
handler.command = new RegExp
export default handler