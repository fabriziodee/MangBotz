import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './src/sound/Sectorclear.mp3'
conn.sendFile(m.chat, vn, 'Sectorclear.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Sector/
handler.tags = ['audio']
handler.help = ['Sector']
handler.limit = 1
handler.command = new RegExp
export default handler