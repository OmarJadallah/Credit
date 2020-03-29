client.on("guildCreate", guild => {
let channel = message.guild.channels.find('name', `daily1`);
channel.send(`شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
  });

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?"

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log(`Logged in as [ ${client.user.id}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  client.user.setGame(`${prefix}help | Nitro on dms `)
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**Thank You For Add SlowBot To Your Server |شكرا لك لاضافة SlowBot في سيرفرك**`)
      guild.owner.send(embed)
});

 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` free broadcast and nitro gen
https://discordapp.com/api/oauth2/authorize?client_id=689879947535188102&permissions=0&scope=bot`) 
}).catch(console.error)
})
 
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    
    
    if (command === `?help`) {
			let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-:: [ Nitro Bot ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
				.addField(`**Hello there **'` ,'**=-=-=-=-=-=-=-=-=-=-=**')
	.addField(`**Try it say (?bc text)**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**The Bot will only join 10k servers**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**After the bot join 10k servers no one can invite the bot**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
                                              .addField('=-=- [ **Thx For Using Our bot Bot**https://discordapp.com/api/oauth2/authorize?client_id=689879947535188102&permissions=8&scope=bot ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`On hold`)
                .setTimestamp()
			
                message.author.sendEmbed(embed)
	}
});

client.on('message',async message => {
  if(message.content === '!unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });
 client.on("message", message => {//bc1

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : Reserved `); 
 message.delete(); 
};     
});
/////////////////////////////////////////////////////////////////////////////////////////////Avatar


client.on("message", message => {//bc2

            if (message.content.startsWith(prefix + "bco")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Reserved `); 
 message.delete(); 
};     
});

client.on("message", message => {//bc3

            if (message.content.startsWith(prefix + "bcf")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m} \n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : Reserved `); 
 message.delete(); 
};     
});


client.on('message' , message => {//bcrole
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("Ping the role  | *bcrole @ everyone text");
        return;
    }
    if(!args[1]) {
      message.channel.send("Ping the role | *bcrole @ everyone text");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`This message has been sent to ${message.guild.memberCount} Members `);
        message.guild.members.forEach(mi => {
          mi.send(
          "Message  :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("There is no role woth this name-_- ");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "Message  :" + "\n" +
        "**" + `${args[1]}` + `By Server : ${message.guild.name}`
          );
        });
      message.channel.send(`**This Message Has been sent to ${message.guild.members.filter(m => m.roles.get(role.id)).size} Members **`);
    }
});

const developers = ["690510385526079568"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-abc')){
if (message.author.id !== '690510385526079568') return message.reply('** You need to be a donator to do this coand   **')
message.channel.sendMessage('Cool Stuff are happening    |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




module.exports = (client, guild) => {
    try {
        client.user.setActivity(`$help | $bc`, { type: 'PLAYING' });

        let bots = 0;
        let people = 0;
        guild.members.forEach(mem => {
            if (mem.user.bot) { bots += 1; }
            else {
                people += 1;
            }
        });

        let logChannel = client.config.logChannel;

        let embed = new Discord.RichEmbed()
            .setColor(client.config.embedColor)
            .setTitle(`Just __joined__ ${guild.name}`)
            .setDescription(`**${guild.owner.user.username}#${guild.owner.user.discriminator}** is the owner of the guild.\nGuild has **${guild.members.size}** members.\n\n`)
            .addField("People: ", people, true)
            .addField("Bots: ", bots, true)
            .setTimestamp();

        client.channels.get(logChannel).send(embed);
    } catch (err) {
        console.log(err);
    }
}
 
client.login(process.env.BOT_TOKEN);
