import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './src/sound/Sadnes.m4a'
conn.sendFile(m.chat, vn, 'Sadnes.m4a', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Sadnes/
handler.help = ['Sadnes']
handler.tags = ['audio']
handler.limit = 1
handler.register = true
handler.command = new RegExp
export default handler
