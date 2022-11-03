import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './src/sound/Gogogo.mp3'
conn.sendFile(m.chat, vn, 'Gogogo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Gogo/
handler.tags = ['audio']
handler.help = ['Gogo']
handler.limit = 1
handler.command = new RegExp
export default handler
