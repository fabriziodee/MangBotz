import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  let res = await fetch('https://raw.githubusercontent.com/MangDTech/project-resources/main/milf.json')
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  let url = json[Math.floor(Math.random() * json.length)]
  await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Nih Kak', '©KBOT', 'Get Again', '/milf', m)
}
handler.command = /^(milf)$/i
handler.tags = ['nsfw']
handler.help = ['milf']
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
