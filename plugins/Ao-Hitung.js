import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './src/sound/Hitung.mp3'
conn.sendFile(m.chat, vn, 'Hitung.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Hitung/
handler.tags = ['audio']
handler.help = ['Hitung']
handler.limit = 1
handler.command = new RegExp
export default handler
