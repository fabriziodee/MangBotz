import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './src/sound/Okeletsgo.mp3'
conn.sendFile(m.chat, vn, 'Okeletsgo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Lets/
handler.tags = ['audio']
handler.help = ['Lets']
handler.limit = 1
handler.command = new RegExp
export default handler