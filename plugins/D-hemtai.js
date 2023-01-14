import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  let res = await fetch('https://raw.githubusercontent.com/MangDTech/project-resources/main/hentai.json')
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  let url = json[Math.floor(Math.random() * json.length)]
  await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), '©KBOT', 'Get Again', '.hemtai', m)
}
handler.command = /^(hemtai)$/i
handler.tags = ['nsfw']
handler.help = ['hemtai']
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
