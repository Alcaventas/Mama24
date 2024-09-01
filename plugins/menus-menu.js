import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const img = './src/assets/images/menu/languages/es/menu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
 

  ${tradutor.texto1[13]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
  ├❧ _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
  ├❧ _${usedPrefix}ppt *<papel / tijera /piedra>*_
  ├❧ _${usedPrefix}prostituto *<nombre / @tag>*_
  ├❧ _${usedPrefix}prostituta *<nombre / @tag>*_
  ├❧ _${usedPrefix}gay2 *<nombre / @tag>*_
  ├❧ _${usedPrefix}lesbiana *<nombre / @tag>*_
  ├❧ _${usedPrefix}pajero *<nombre / @tag>*_
  ├❧ _${usedPrefix}pajera *<nombre / @tag>*_
  ├❧ _${usedPrefix}puto *<nombre / @tag>*_
  ├❧ _${usedPrefix}puta *<nombre / @tag>*_
  ├❧ _${usedPrefix}manco *<nombre / @tag>*_
  ├❧ _${usedPrefix}manca *<nombre / @tag>*_
  ├❧ _${usedPrefix}rata *<nombre / @tag>*_
  ├❧ _${usedPrefix}love *<nombre / @tag>*_
  ├❧ _${usedPrefix}doxear *<nombre / @tag>*_
  ├❧ _${usedPrefix}pregunta *<txt>*_
  ├❧ _${usedPrefix}acertijo_
  ├❧ _${usedPrefix}top *<txt>*_
  ├❧ _${usedPrefix}topgays_
  ├❧ _${usedPrefix}formarpareja_
  ├❧ _${usedPrefix}verdad_
  ├❧ _${usedPrefix}reto_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[14]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _$YA ACTIVO ✔️ *antilink*_
  ├❧ _$YA ACTIVO ✔️ *modoadmin*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[15]}

  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}play *<txt>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[17]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}add *num>*_
  ├❧ _${usedPrefix}kick *<@tag>*_
  ├❧ _${usedPrefix}kicknum *<txt>*_
  ├❧ _${usedPrefix}grupo *<abrir/cerrar>*_
  ├❧ _${usedPrefix}promote *<@tag>*_
  ├❧ _${usedPrefix}demote *<@tag>*_
  ├❧ _${usedPrefix}infogroup_
  ├❧ _${usedPrefix}resetlink_
  ├❧ _${usedPrefix}link_
  ├❧ _${usedPrefix}setwelcome *<txt>*_
  ├❧ _${usedPrefix}setbye *<txt>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[20]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}piropo_
  ├❧ _${usedPrefix}consejo_
  ├❧ _${usedPrefix}fraseromantica_
  ├❧ _${usedPrefix}historiaromantica_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[21]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}kpop *<blackpink/exo/bts>*_
  ├❧ _${usedPrefix}cristianoronaldo_
  ├❧ _${usedPrefix}messi_
  ├❧ _${usedPrefix}cat_
  ├❧ _${usedPrefix}dog_
  ├❧ _${usedPrefix}meme_
  ├❧ _${usedPrefix}itzy_
  ├❧ _${usedPrefix}blackpink_
  ├❧ _${usedPrefix}navidad_
  ├❧ _${usedPrefix}wpmontaña_
  ├❧ _${usedPrefix}pubg_
  ├❧ _${usedPrefix}hacker_
  ├❧ _${usedPrefix}planeta_
  ├❧ _${usedPrefix}randomprofile_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[25]}
  
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}tamaño *<cant> <img / video>*_
  ├❧ _${usedPrefix}readviewonce *<img / video>*_
  ├❧ _${usedPrefix}clima *<país> <ciudad>*_
  ├❧ _${usedPrefix}encuesta *<txt1|txt2>*_
  ├❧ _${usedPrefix}hd *<responde a img>*_
  ├❧ _${usedPrefix}acortar *<url>*_
  ├❧ _${usedPrefix}traducir *<txt>*_
  ├❧ _${usedPrefix}nowa *num>*_
  ├❧ _${usedPrefix}covid *<pais>*_
  ├❧ _${usedPrefix}horario_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[26]}

  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}adventure_
  ├❧ _${usedPrefix}cazar_
  ├❧ _${usedPrefix}cofre_
  ├❧ _${usedPrefix}balance_
  ├❧ _${usedPrefix}claim_
  ├❧ _${usedPrefix}heal_
  ├❧ _${usedPrefix}lb_
  ├❧ _${usedPrefix}levelup_
  ├❧ _${usedPrefix}myns_
  ├❧ _${usedPrefix}perfil_
  ├❧ _${usedPrefix}work_
  ├❧ _${usedPrefix}minar_
  ├❧ _${usedPrefix}minar2_
  ├❧ _${usedPrefix}buy_
  ├❧ _${usedPrefix}buyall_
  ├❧ _${usedPrefix}robar *<cant> <@tag>*_
  ├❧ _${usedPrefix}crime
  ├❧ _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
  ├❧ _${usedPrefix}unreg *<sn>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[27]}
  
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}sticker *<responder a img o video>*_
  ├❧ _${usedPrefix}sticker *<url>*_
  ├❧ _${usedPrefix}kiss *<@tag>*_
  ├❧ _${usedPrefix}dado_
  ╰───── • ◆ • ─────╯

    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen1
    } else if (idioma == 'pt-br') {
      pp = global.imagen2
    } else if (idioma == 'fr') {
      pp = global.imagen3
    }else if (idioma == 'en') {
      pp = global.imagen4
    } else if (idioma == 'ru') {
      pp = global.imagen5
    } else {
      pp = global.imagen1 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      //await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
