/**
Ubah semua nomor dan wm di file ini
Jika apikey habis silahkan daftar sendiri di website yang du sediakan
+ Free Rest Api https://api.botcahx.live
- Sisanya kalian tambah sendiri sesuai keperluan.
**/


global.owner = ['6281395861695']  
global.mods = ['6281395861695'] 
global.prems = ['6281395861695']
global.nameowner = 'Tio'
global.numberowner = '6281395861695' 
global.mail = 'support@tioprm.my.id' 
global.dana = '6281395861695'
global.pulsa = '6281395861695'
global.gopay = '6281395861695'
global.namebot = 'RTXZY-MD'
global.gc = 'https://chat.whatsapp.com/Ln2vHjRrRayAbzalRMB56r'
global.web = 'https://github.com/BOTCAHX'
global.instagram = 'https://instagram.com/prm2.0'
global.lolkey = 'yourkey'
global.btc = 'Admin'
global.wm = '© Tio'
global.watermark = wm
global.wm2 = '⫹⫺ Tio'
global.wm3 = '© Tio'
global.wm4 = '© BotWa'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\nR-TXZY-MD'
global.APIs = { // API Prefix
  // name: 'https://website'
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.live',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.botcahx.live': 'QaepQXxR',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
