var fs=require("fs")
var fetch=require("node-fetch")

fs.readdir(`./json`, function(err, files) {

    files.forEach(function(file, index) {
        var data = fs.readFileSync('./json/' + file, 'utf8')
        try {
            JSON.parse(data)
        } catch (e) {
            console.log(chalk.greenBright("Reparing /json/" + file))
            fetch("https://raw.githubusercontent.com/Embedded77/ETB/main/json/" + file).then(res => res.json()).then(data => {
                fs.writeFileSync("./json/" + file, JSON.stringify(data))
            })
        }
    });
});
