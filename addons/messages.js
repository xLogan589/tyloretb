var indexmessages=require("./json/indexmessages.json")
setInterval(function() {
  fetch("https://privatemessages.roblox.com/v1/messages?messageTab=Inbox", {
    headers: {
      "Content-Type": "application/json",
      cookie: ".ROBLOSECURITY=" + process.env.cookie + ";",
    }
  }).then(x => x.json()).then(res => {
    res.collection.forEach(x => {
      if (indexmessages[x.id] == undefined) {
        indexmessages[x.id] = ""
        if (x.sender.name != "ROBLOX") {

          var em = new discord.MessageEmbed()

            .setAuthor(x.sender.name,
              "https://www.roblox.com/headshot-thumbnail/image?userId=" +
              x.sender.id +
              "&width=420&height=420&format=png")
            .setTitle(x.subject.replace("'", "").replace("`", "").replace(`"`, "").replace(".", ""))
            .setDescription(x.body.replace("'", "").replace("`", "").replace(`"`, "").replace(".", "").replace(
              /<br \/>/g,
              "\n"
            ).replace("&#39;", `'`).replace("[", ``).replace(/^[A-Za-z ]/, ""))

            .setFooter("Embedded77#1367 | https://discord.gg/eZYUByBAZZ")
            .setTimestamp()
            .setColor("#ffc0cb")

          client.channels.cache.get("" + NOTIF_CHANNEL).send(em);
        }
      }
    })
  })

}, 10000)
