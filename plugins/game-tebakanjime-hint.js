let handler = async (m, { conn }) => {
    conn.tebakanjime = conn.tebakanjime ? conn.tebakanjime : {}
    let id = m.chat
    if (!(id in conn.tebakanjime)) throw false
    let json = conn.tebakanjime[id][1]
    conn.sendButton(m.chat, '```' + json.name(/[AIUEOaiueo]/ig, '_') + '```', author, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hani$/i

handler.limit = true

export default handler
