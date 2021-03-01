exports.wait = () => {
	return`*[BOMAT] GUA GAK PEDULI*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*eits kamu belom daftar di LordBOT~ daftar dulu untuk menggunakan bot cara daftar ${prefix}daftar nama|umur*\n*contoh= ${prefix}daftar ${pushname}|15*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER」*\n\nkamu sudah terdaftar dengan data \n\n┏━➤nama\n┗➤${namaUser}\n┏━➤nomer\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤umur\n┗➤${umurUser}\n┏━➤waktu pendaftaran\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTE : jangan sampai lupa save nomor admin LordBOT~ Dan Jangan Lupa Untuk Ketik ,rules sebelum memulai botnya ya😁`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *USER* ❱ ⊰─══
├➤ *Nama* : ${pushname}
├➤ *Nomer* : wa.me/${sender.split("@")[0]}
├➤ *Uang mu* : Rp${uangku}
├➤ *XP* : ${getLevelingXp(sender)}/${reqXp}
├➤ *Level* : ${getLevelingLevel(sender)}
├➤ *User register* : ${_registered.length}
├══─⊱⸨ *LordBOT~* ⸩  ⊰─════╯
│
├➤ *Ketik ${prefix}rules*
├➤ *Ketik ${prefix}info*
│
├❰ *MAKER MENU* ❱
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}sticker* (jika video max. 9det)
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kuncitext*
├♡ۜۜ͜͡✿➤ *${prefix}nulis*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}silktext*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}slide*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hartatahta*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}galaxtext*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}makequote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}toimg*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ocr*
│
├❰ *FUN MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}mining*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bisakah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kapankah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}apakah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}seberapagay*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}rate*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}truth*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}dare*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hobby*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}fitnah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}pasangan*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ntahlah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}slap*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}caklontong*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}family100*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tebakgambar*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kbbi*
├♡ۜۜ͜͡✿➤ *${prefix}dadu*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}artinama*
│
├❰ *SOUND MENU* ❱
│
├♡ۜۜ͜͡✿➤ *${prefix}iri*
├♡ۜۜ͜͡✿➤ *${prefix}baka/bodoh/onichan*
├♡ۜۜ͜͡✿➤ *${prefix}avatar*
├♡ۜۜ͜͡✿➤ *${prefix}sound*
├♡ۜۜ͜͡✿➤ *${prefix}sound1*                                                                               ├♡ۜۜ͜͡✿➤ *${prefix}tagall*
├♡ۜۜ͜͡✿➤ *${prefix}sound2*
├♡ۜۜ͜͡✿➤ *${prefix}sound3*
├♡ۜۜ͜͡✿➤ *${prefix}sound4*
├♡ۜۜ͜͡✿➤ *${prefix}sound5*
├♡ۜۜ͜͡✿➤ *${prefix}sound6*
├♡ۜۜ͜͡✿➤ *${prefix}sound7*
│
├❰ *ANIME MENU* ❱
│
├♡ۜۜ͜͡✿➤ *${prefix}boruto*
├♡ۜۜ͜͡✿➤ *${prefix}rize*
├♡ۜۜ͜͡✿➤ *${prefix}kaneki*
├♡ۜۜ͜͡✿➤ *${prefix}wibu*
├♡ۜۜ͜͡✿➤ *${prefix}naruto*
├♡ۜۜ͜͡✿➤ *${prefix}avatar*
├♡ۜۜ͜͡✿➤ *${prefix}wallpapernime*
├♡ۜۜ͜͡✿➤ *${prefix}minato*                                                                               ├♡ۜۜ͜͡✿➤ *${prefix}tagall*
├♡ۜۜ͜͡✿➤ *${prefix}miku*
├♡ۜۜ͜͡✿➤ *${prefix}animesaran*
├♡ۜۜ͜͡✿➤ *${prefix}animesaran2*
├♡ۜۜ͜͡✿➤ *${prefix}kurumi*
├♡ۜۜ͜͡✿➤ *${prefix}hinata*
├♡ۜۜ͜͡✿➤ *${prefix}sasuke*
├♡ۜۜ͜͡✿➤ *${prefix}sakura*
├♡ۜۜ͜͡✿➤ *${prefix}akira*
├♡ۜۜ͜͡✿➤ *${prefix}itori*
├♡ۜۜ͜͡✿➤ *${prefix}touka*
├♡ۜۜ͜͡✿➤ *${prefix}rem*
├♡ۜۜ͜͡✿➤ *${prefix}chika*
├♡ۜۜ͜͡✿➤ *${prefix}wait* [kirim foto anime]
│
├❰ *ISLAM MENU* ❱
│
├♡ۜۜ͜͡✿➤ *${prefix}quran*
├♡ۜۜ͜͡✿➤ *${prefix}listsurah*
│
├❰ *MEDIA MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}beritahoax*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}brainly*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}pinterest*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}husbu*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}husbu2*
├♡ۜۜ͜͡✿➤ *${prefix}waifu*
├♡ۜۜ͜͡✿➤ *${prefix}waifu2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}loli*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}loli2*
├♡ۜۜ͜͡✿➤ *${prefix}loli3*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hemkel*
├♡ۜۜ͜͡✿➤ *${prefix}quoterandom*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}katadoi*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}katakatadilan*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}neko*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nekonime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomanime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomhusbu*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomcyberspace*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomexo*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}blackpink*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomgame*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randommountain*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomloli*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomprogramer*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hartatahta*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}meme*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}memeindo*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tts*
├♡ۜۜ͜͡✿➤ *${prefix}hentai*
├♡ۜۜ͜͡✿➤ *${prefix}darkjokes*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}play*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}lirik*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ssweb*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}map*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tiktokstalk*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}stalkig*
├♡ۜۜ͜͡✿➤ *${prefix}afk*
├♡ۜۜ͜͡✿➤ *${prefix}unafk*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ytmp4*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ytmp3*
│    
├❰ *LIMIT MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}limit*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}buylimit*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}dompet*
│
├❰ *NSFW MENU* ❱
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}pokemon*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}anjing*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nsfwloli*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwneko*
├♡ۜۜ͜͡✿➤ *${prefix}solo*
├♡ۜۜ͜͡✿➤ *${prefix}nekopoi*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwblowjob*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwtrap*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwpussy*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwyuri*
├♡ۜۜ͜͡✿➤ *${prefix}bokep*
├♡ۜۜ͜͡✿➤ *${prefix}randombokep*
├♡ۜۜ͜͡✿➤ *${prefix}ero*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwloli2*
├♡ۜۜ͜͡✿➤ *${prefix}sideoppai*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwwaifu*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwpussy*
├♡ۜۜ͜͡✿➤ *${prefix}ecchi*
├♡ۜۜ͜͡✿➤ *${prefix}nekopoi* <judul>
│
├❰ *GROUP MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag5*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag20*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag50*
├♡ۜۜ͜͡✿➤ *${prefix}del*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}grouplist*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}level*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}leaderboard*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}linkgc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tagall*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setpp*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}add*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kick*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tutuptime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setname*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setdesc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}demote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}promote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}listadmin*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}group* [buka/tutup]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}leveling* [enable/disable]
├♡ۜۜ͜͡✿➤ *${prefix}antilinkgrup* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nsfw* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}simih* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}welcome* [1/0]
│
├❰ *OWNER MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bcgc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kickall* Mau Ngapain Tod? >:
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setreply*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setprefix*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}clearall*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}block*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}unblock*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}listblock*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}leave*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}event* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}clone*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setbotpp*
│
├❰ *NEW FITUR* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag5*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag20*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag50*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tutuptime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo1*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo3*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo4*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo5*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo6*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo7*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo8*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo9*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo10*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo11*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo12*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo13*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo14*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo15*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo16*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo17*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo18*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo19*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo20*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo21*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo22*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo23*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo24*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}indo25*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}lordgroup*
│
│
├───⊱⸨ *TQTO* ⸩  ⊰─═══
│©AlpinOFC
│©LordBOT~
╰──── ⸨ *LordBOT~* ⸩  
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 OMEDETOU 」*
┏𖥻ꦼꦽ➳ *Nama* : ${pushname}
┣𖥻ꦼꦽ➳ *Nomer* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf kak ${pushname} limit kamu hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

🍁NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit🍁`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nama* : ${pushname}\n┣𖥻ꦼꦽ➳ *Nomer* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
