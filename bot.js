const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


//-----------------------------------------------------------------------------------------------------------------------------



 


client.on('message', DEL => {//By Mahmoud-QuaStyle
if(DEL.content === 'g!bot-owner') {
var embed = new Discord.RichEmbed()
.addField('صاْنع البوت : @༄ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle ≽ܫ≼#5661  ', `${client.user.tag}`, true)
.setColor("RANDOM")
DEL.channel.sendEmbed(embed);

}
});






client.on("message", message => {
    if (message.content === "g!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setDescription(`**❓❔❗️❕وش مميزات البوت❗️❕❓❔**
        **__1-__:books:🧐 GAMING BOT 🧐:books:
         __2-__:white_check_mark: :part_alternation_mark:️ استخدامه جدا سهل:part_alternation_mark:️:white_check_mark: 
         __3-__:gear:️صيانه كل يوم:gear:️
         __4-__:money_with_wings: مجاني :money_with_wings:**`)
   message.author.sendEmbed(embed)
   
   }
   });






////2 





////////////////////////////////////////////////////////////////////////////////////////////////////////////////Help

	
		 


 
client.on("message", message => {
	var prefix = "g!";
 if (message.content === "g!help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
	 
	         Please Chose: 


${prefix}***help-public*** →→ ***『اوامر عامة』*** :bell:  

${prefix}***help-admin***  →→***『اوامر ادارة السيرفر』*** :ok_hand: 
			 
${prefix}***help-games*** →→ ***『اوامر الالعاب』*** :video_game:

${prefix}***help-music***  →→ ***『اوامر الموسيقى』*** :loud_sound: 
 
${prefix}***help-colors*** →→ ***『اوامر اللوان』*** :traffic_light: 』         

${prefix}***help-welcome*** →→ ***『اوامر الترحيب』*** :loudspeaker:

${prefix}***help-bc*** →→ ***『اوامر النشر 』*** :e_mail: 
	  `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
  

client.on("message", message => {
	var prefix = "g!";
 if (message.content === "g!help-public") {
	 message.channel.send('');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			  اوامر عامة                                                                                 
:mailbox_with_mail:  g!allbots ~ لعرض جميع البوتات الي بالسيرفر
:mailbox_with_mail:   g!server ~يعرض لك معلومات عن السيرفر
:mailbox_with_mail:   g!bot ~ يعرض لك كل معلومات البوت
:mailbox_with_mail:   g!count ~ يعرض لك عدد الاشخاص بالسيرفر بدون بوتات
:mailbox_with_mail: g!invites ~ يعرض لك  عدد انفايتاتك بالسيرفر 
:mailbox_with_mail: g!invite-codes ~ يعرض لك روابط الانفايتات حكك في السيرفر 
:mailbox_with_mail: g!cal ~ اله حاسبة
:mailbox_with_mail: g!trans <language> <any thing> ~ يترجم لك الي تبيه من اي لغة
:mailbox_with_mail: g!short ~ يختصر لك رابط كبير الى رابط صغير
:mailbox_with_mail: g!tag ~ يكتب لك الكلمة بشكل جميل وكبير
:mailbox_with_mail: g!google ~ للبحث في قوقل عن طريق الدسكورد
:mailbox_with_mail: g!perms ~ يعرض لك برمشناتك بالسيرفر
:mailbox_with_mail: g!rooms ~ يعرض لك كل الرومات الي بالسيرفر مع عددها
:mailbox_with_mail: g!roles ~ يعرض لك كل الرانكات بالسيرفر بشكل جميل
:mailbox_with_mail: g!emojilist ~ يعرض لك كل الايموجيات الي بالسيرفر
:mailbox_with_mail: g!say ~ يكرر الكلام الي تكتبو
:mailbox_with_mail: g!image ~ صورة السيرفر
:mailbox_with_mail: g!members ~ يعرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
:mailbox_with_mail: g!id ~ معلومات عنك
:mailbox_with_mail: g!bans ~ عدد الاشخاص المبندة
:mailbox_with_mail: g!avatar ~ صورتك او صورة الي تمنشنو
:mailbox_with_mail: g!embed ~ يكرر الي تقولو بشكل حلو
:mailbox_with_mail: g!emoji <any things> ~ لتحويل اي كلمه تقولها الي ايموجي
:mailbox_with_mail: g!inv ~ لدعوة البوت الى سيرفرك
:mailbox_with_mail: g!support ~ سيرفر الدعم
:mailbox_with_mail: g!contact ~ ارسال اقتراح او لمراسلة صاحب البوت
:mailbox_with_mail: g!report ~ ي احد سبك واهانك
:mailbox_with_mail: g!owner<massange ~ ارسال رسالة لي اونر 
:mailbox_with_mail: g!what ~  معلومات عن السرفر 
	
`)
   message.author.sendEmbed(embed)
    
   }
   }); 
client.on('message', msg => {
    if(msg.content === 'g!help-public')
    msg.reply('Check Your DM :white_check_mark:')
  }); 

   
   client.on("message", message => {
	var prefix = "g!";
 if (message.content === "g!help-admin") {
	  message.channel.send('');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
	      اوامر ادارة السيرفر
:ok_hand:   g!move @user ~  لسحب الشخص الى روومك  
:ok_hand:  g!bc ~ رسالة جماعية الى كل اعضاء السيرفر
:ok_hand:  g!role @user <rank> ~ لأعطاء رتبة لعضو معين
:ok_hand:  g!roleremove @user <rank> ~ لازالة الرتبة من شخص معين
:ok_hand:  g!role all <rank> ~ لأعطاء رتبة للجميع
:ok_hand:  g!role humans <rank> ~ لأعطاء رتبة للاشخاص فقط
:ok_hand:  g!role bots <rank> ~ لأعطاء رتبة لجميع البوتات
:ok_hand:  g!hchannel ~ اخفاء الشات
:ok_hand:  g!schannel ~ اضهار الشات المخفية
:ok_hand:  g!clr <numbr> ~ مسح الشات بعدد
:ok_hand: g!clear ~ مسح الشات
:ok_hand: g!mute @user <reason> ~ اعطاء العضو ميوت لازم رتبة <Muted>
:ok_hand: g!unmute @user ~ لفك الميوت عن الشخص 
:ok_hand: g!kick @user <reason> ~ طرد الشخص من السيرفر
:ok_hand: g!ban @user <reason> ~ حضر الشخص من السيرفر
:ok_hand: g!mutechannel ~ تقفيل الشات
:ok_hand: g!unmutechannel ~ فتح الشات
:ok_hand: g!dc ~ مسح كل الرومات
:ok_hand: g!dr ~ <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات
:ok_hand: g!ct <name> ~ انشاء شات
:ok_hand: g!cv <name> ~ انشاء رووم فويس
:ok_hand: g!delet <name> ~ مسح الشات او الرووم فويس
:ok_hand: g!ccolors <number> ~ ينشا لك الوان مع كم الوان تبي
:ok_hand: Create 
`)
   message.author.sendEmbed(embed)
    
   }
   });
client.on('message', msg => {
    if(msg.content === 'g!help-admin')
    msg.reply('Check Your DM :white_check_mark:')
  }); 

   client.on("message", message => {
	var prefix = "g!";
 if (message.content === "g!help-games") {
	  message.channel.send('');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
          اوامر الالعاب
:video_game: g!rps ~ حجر ورقة مقص
:video_game: g!speed ~ اسرع كتابة
:video_game: g!quas ~ اسئلة عامة
:video_game: g!نكت ~ نكت 
:video_game: g!عبة فكك ~ فكك
:video_game: g!عواصم عشوائية ~ عواصم
:video_game: g!لعبة كت تويت ~ كت تويت
:video_game: g!roll <number> ~ قرعة
:video_game: g!لو خيروك بطريقة حلوة ~ لو خيروك
:video_game: g!عبة مريم ~ مريم
:video_game: g!فوائد ونصائح  ~ هل تعلم
:video_game: g!لك عقاب قاسية ~ عقاب `)

   message.author.sendEmbed(embed)
    
   }
   }); 
client.on('message', msg => {
    if(msg.content === 'g!help-games')
    msg.reply('Check Your DM :white_check_mark:')
  });
			  
client.on("message", message => {
	var prefix = "g!";
 if (message.content === "g!help-music") {
	  message.channel.send(':white_check_mark: | Check Your DM تم الأرسال بلخاص ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
	        اوامر الموسيقى 
:loud_sound: ${prefix}play ~ لتشغيل أغنية برآبط أو بأسم
:loud_sound: ${prefix}skip ~ لتجآوز الأغنية الحآلية
:loud_sound: ${prefix}pause ~ إيقآف الأغنية مؤقتا
:loud_sound: ${prefix}resume ~ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
:loud_sound: ${prefix}vol ~ لتغيير درجة الصوت 100 - 0
:loud_sound: ${prefix}stop ~ لإخرآج البوت من الروم
:loud_sound: ${prefix}np ~ لمعرفة الأغنية المشغلة حآليا
:loud_sound: ${prefix}queue ~ لمعرفة قآئمة التشغيل

 `)
   message.author.sendEmbed(embed)
    
   }
   }); 


client.on("message", message => {
 if (message.content === "!help-colors") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('👑 اوامر اللوانء👑')
      .addField('❖-|g!colors', `👑لعرض قائمة الألوان💯`)
      .addField('❖-|g!createcolors', `☺لأنشاء 50 لون💯`)
      .addField('❖-|g!color<number>', `😊لتحط ايا 0ون من هول الالوان اكتب الأمر و الرقم من 1 ل50 انت اختر😉`)
  message.author.send({embed});
      message.channel.send("")
 }
});
 client.on('message', msg => {
    if(msg.content === 'g!help-colors')
    msg.reply('Check Your DM :white_check_mark:')
  });

client.on("message", message => {
 if (message.content === "g!help-colors") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('👑 اوامر اللوانء👑')
      .addField('❖-|g!colors', `👑لعرض قائمة الألوان💯`)
      .addField('❖-|g!createcolors', `☺لأنشاء 50 لون💯`)
      .addField('❖-|g!color<number>', `😊لتحط ايا 0ون من هول الالوان اكتب الأمر و الرقم من 1 ل50 انت اختر😉`)
  message.author.send({embed});
      message.channel.send("")
 }
});



 client.on("message", message => {
    if (message.content === "g!help-bc") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

  :e_mail:      g!obc | لأرسال برود كاست للكل

  :e_mail:     gb!bc  |  لأرسال برود كاست للأونلاين

  :e_mail:      g!invite |  لدعوة البوت الي سيرفرك

  :e_mail:      g!support | سيرفر السبورت** `)
   message.author.sendEmbed(embed)
   
   }
   });


client.on('message', msg => {
    if(msg.content === 'g!help-bc')
    msg.reply('Check Your DM :white_check_mark:')
  });





  client.on("message", message => {
 if (message.content === "g!help-welcome") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setDescription('👑أوامر الترحيب👑')
	.addField('❖-|!wlc 1', `👋يخلي البوت يرسل لك ترحيب بشكل حلو👋`)
	  .addField('❖-|!wlc 2', `👑يخلي البوت يرسل لك ترحيب بشكل تاني خورافي👑`)
	  .addField('❖-|!wlc 3', `👋يخلي البوت يرسل لك ترحيب بشكل غير الي فاتوا👋`)
	  .addField('❖-|!wlc 4', `👑يخلي البوت يرسل لك ترحيب بشكل اخر و خورافي مرة👑`)
          .addField('❖-|!wlc 5', `👋يخلي البوت يرحب بك بشكل حلو👋`)
          .addField('❖-|!wlc 6', `👑يخلي البوت يرحب بك بطريقة خورافية👑`)
          .addField('❖-|!wlc 7', `👋يخلي البوت يرحب بك بطريقة حلوة👋`)
          .addField('❖-|!wlc 8', `👑يخلي البوت يرحب بك مثل الباقي👑`)
          .addField('❖-|!wlc 9', `👋يخلي البوت يرحب بك مثل الباقي👋`)
          .addField('❖-|!wlc 10', `👑يخلي البوت يرحب بك مثل الباقي👑`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")

 }
});


///////////////////////////////////////////////////////----////////ID
client.on("message", msg => {
           var prefix = "g!";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
	    }
});
////////////////////////////////////////////////////////////////////////////ID
client.on('message', message => {
    if (message.content === "g!ID") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setTitle(`info about ${message.guild.name}`)
   .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
   .addField('Server ID 🆔',`➥` + message.guild.id, true)
   .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
   .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
   .addField("Server Region📡",`➥ ` + message.guild.region, true)
   .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
   .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
   .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
   .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
   .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
   .addField(`info about ${message.author.username}`, `➥ `)
   .addField("Name",`➥ ` + `${message.author.username}`, true)
   .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
   .addField("ID 🆔",`➥ ` + message.author.id, true)
   .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL)
      
      /////////////////////////////////////////////////////GAMING
   message.channel.sendEmbed(embed);
     }
 });
///////////////////////////////////////Mahmoud-QuaStyle

///////////////////////////////////////////////////////////////////Member
client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "g!";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });		





client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "g!";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "Members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });		

////////////////////////////////////////-----------////////////////////////////////////Ticket
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("g!ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("g!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === 'g!confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// ALPHA CODES
                   .then((collected) => {
                       message.channel.delete();
                   })    /// ALPHA CODES
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});



//////////////////////////////////////////////////////////////////////Support 2 
client.on('message', message => {
     if (message.content === "g!support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/h76vMMP**")
     
     
  message.channel.sendEmbed(embed);
    }
});





///2






///////////////////////////////////////////////////////////////////////////////////////////////////Avatar
client.on('message', message => {
    if (message.content.startsWith("g!avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('GAMING BOT',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});
///////////////////////////////////////////////////////////////////////////////////////Photo Server IMAGE 
client.on("message", message => {
    const prefix = "g!"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

///////////////////////////////////////////////////////////////////////--------------///////////////MOVE 



client.on('message', message => {
	var prefix = "g!";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});	














client.login(process.env.BOT_TOKEN);

