module.exports = {
    name: 'playtunes',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}playtunes [channel] [startdate] [enddate]',

    execute(client, message, args) {
        console.log(JSON.stringify(args));
        var urlRegex = /(http?[^\s]+)|(www?[^\s]+)/g;

        function parseDate(str) {
          function pad(x){return (((''+x).length==2) ? '' : '0') + x; }
          var m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
            , d = (m) ? new Date(m[3], m[2]-1, m[1]) : null
            , matchesPadded = (d&&(str==[pad(d.getDate()),pad(d.getMonth()+1),d.getFullYear()].join('/')))
            , matchesNonPadded = (d&&(str==[d.getDate(),d.getMonth()+1,d.getFullYear()].join('/')));
          return (matchesPadded || matchesNonPadded) ? d : null;
        }
        
        function isLink(message){
            return !!message.content.match(urlRegex);
        }
        
        function messageDateInRange(message) {
          let messageDate = new Date(message.timestamp).setHours(0,0,0,0);
          if (messageDate >= startDate && messageDate <= endDate) {
            return true
          }
          return false;
        }
        
    //     // Command option values are accessible in event.data.options
    //     let providedOptionFields = context.params.event.data.options.map((option) => {
    //       let types = {
    //         '3': (opt) => { return `${opt.value}`; },
    //         '4': (opt) => { return `${opt.value}`; },
    //         '5': (opt) => { return `${opt.value}`; },
    //         '6': (opt) => { return `<@!${opt.value}>`; },
    //         '7': (opt) => { return `<#${opt.value}>`; },
    //         '8': (opt) => { return `<@&${opt.value}>`; },
    //         '9': (opt) => { return `${opt.value}`; },
    //       };
    //       return {
    //         name: `${option.name}`,
    //         value: `${types[option.type] ? types[option.type](option) : (option.value || 'none')}`,
    //       };
    //     });
        
    //     let channels = lib.discord.guilds['@0.1.0'].channels.list({
    //       guild_id: `850793778645827595`
    //     });
        
        
    //     let targetChannelId = providedOptionFields.find(option => option.name == "channel").value;
    //     let targetChannel =  lib.discord.channels['@0.1.1'].retrieve({
    //       channel_id: targetChannelId
    //     });
        
    //     let currentChannelId = context.params.event.channel_id;
    //     let currentChannel = channels.find(channel => channel.id === currentChannelId);
        
    //     let squatBot = channels.find(channel => channel.name == "the-squat-bot");
    //     let acidTunes = channels.find(channel => channel.name == "acid-tunes-avin-it");
    //     let otherTunes = channels.find(channel => channel.name == "all-other-tunes");
    //     let pianoClassical = channels.find(channel => channel.name == "piano-and-classical");
    //     let guiltyPop = channels.find(channel => channel.name == "guilty-pop-pleasures");
    //     let yourMusic = channels.find(channel => channel.name == "your-music");
        
    //     let allowedChannels = [acidTunes.id, otherTunes.id, pianoClassical.id, guiltyPop.id, yourMusic.id];
        
        
        
    //     let gen = channels.find(channel => channel.name == "general");
        
        
    //     // initialise response object
    //     let messageResponse = {
    //       channel_id: `${context.params.event.channel_id}`,
    //       content: `<@!${context.params.event.member.user.id}> just started playing tunes from ${targetChannelId}`,
    //       embed: {
    //         type: 'rich',
    //         color: 0x00AA00, // Green color
    //         fields: providedOptionFields, 
    //       },
    //     };
        
    //     let linkResponse = {
    //       channel_id: `${context.params.event.channel_id}`,
    //     };
        
    //     let errorResponse = {
    //       channel_id: `${context.params.event.channel_id}`,
    //       content: '',
    //       embed: {
    //         type: 'rich',
    //         color: 0xAA0000, // Red color
    //         description: 'Paramater Error'
    //       },
    //     };
        
    //     if(currentChannel.id !== squatBot.id){
    //       errorResponse.embed.description = `playtunes only works in <#${squatBot.id}>`;
    //     lib.discord.channels['@0.0.1'].messages.create(errorResponse);
    //       return;
    //     }
        
    //     if (!allowedChannels.includes(targetChannel.id)) {
    //       errorResponse.embed.description  = `playtunes only works on <#${acidTunes.id}>, <#${otherTunes.id}>, <#${pianoClassical.id}>, <#${guiltyPop.id}> and <#${yourMusic.id}>`;  
    //        lib.discord.channels['@0.0.1'].messages.create(errorResponse);
    //       return;
    //     }
        
    //     let now = new Date().setHours(0, 0, 0, 0);
        
    //     let startDate = parseDate(providedOptionFields.find(option => option.name == "startdate").value).setHours(0, 0, 0, 0);
    //     let endDate = parseDate(providedOptionFields.find(option => option.name == "enddate").value).setHours(0, 0, 0);
        
    //     if(startDate ==  null) {
    //       errorResponse.embed.description = `Error: start date must be in form DD/MM/YYYY (e.g 11/12/2020)`;  
    //        lib.discord.channels['@0.0.1'].messages.create(errorResponse);
    //       return;
    //     }
        
    //     if(endDate ==  null) {
    //       errorResponse.embed.description = `Error: end date must be in form DD/MM/YYYY (e.g 11/12/2020)`;    
    //        lib.discord.channels['@0.0.1'].messages.create(errorResponse);
    //       return;
    //     }
        
    //     if(startDate > now){
    //       errorResponse.embed.description = `Error: start date must be in the past`;  
    //        lib.discord.channels['@0.0.1'].messages.create(errorResponse);
    //       return;
    //     }
        
    //     if(endDate > now){
    //       errorResponse.embed.description = `Error: end date must be in the past`;  
    //        lib.discord.channels['@0.0.1'].messages.create(errorResponse);
    //       return;
    //     }
        
    //     if(startDate > endDate){
    //       errorResponse.embed.description = `Error: start date must be before end date`;  
    //        lib.discord.channels['@0.0.1'].messages.create(errorResponse);
    //       return;
    //     }
        
    //     let messages =  lib.discord.channels['@0.1.1'].messages.list({
    //       channel_id: targetChannel.id,
    //       limit: 100
    //     });
          
        
    //     let links = messages
    //         .filter(messageDateInRange)
    //         .filter(isLink)
    //         .map((message) => {
    //           return message.content.match(urlRegex).map(link => `-play ${link}`);
    //         })
    //         .flat(1);
            
    //     if(!links.length){
    //       errorResponse.embed.description = `No playable links found`;  
    //        lib.discord.channels['@0.0.1'].messages.create(errorResponse);
    //       return;
    //     }
    //          lib.discord.channels['@0.0.1'].messages.create(messageResponse);  
            
    //         for(let i = 0; i < links.length; i++){
    //           linkResponse.content = `${links[i]}`;
    //            lib.discord.channels['@0.0.1'].messages.create(linkResponse);     
    //         }
    },
};


      
