const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const path = require("path");
const fs = require("fs");
var Pug = require("koa-pug");

const app = new Koa();
var router = new Router();
var routerMusic = new Router({
    prefix: "/music"
});


routerMusic
    .get("/", async ctx => {
        // ctx.response.body = fs.readFileSync("musicLib.json", "utf8");
        // ctx.response.status = 200;
        let musicLib = JSON.parse(fs.readFileSync("musicLib.json", "utf8"));
        await ctx.render("index", { items: musicLib.songs });
    })
    .put("/", ctx => {
        let musicLib = JSON.parse(fs.readFileSync("musicLib.json", "utf8"));

        if(typeof ctx.request.body.titel === "undefined" && typeof ctx.request.body.artist === "undefined"){
            ctx.throw(500, "Keine Informationen erhalten");
        }
        if(typeof ctx.request.body.titel === "undefined" || typeof ctx.request.body.artist === "undefined") {
            ctx.throw(400, "Informationen nicht vollständig");
        }

        musicLib.songs.push(ctx.request.body);
        fs.writeFileSync("musicLib.json", JSON.stringify(musicLib));
        ctx.response.status = 202;
    });

app.on("error", err => {
    console.log("The server encountered an Error: ", err);
});

const pug = new Pug({
    viewPath: path.resolve(__dirname, "views"),
    app: app
});
router
    .get("/filme", async ctx => {
    let filmLib = JSON.parse(fs.readFileSync("filmLib.json", "utf8"));
    await ctx.render("index", { items: filmLib.filme });
});



app.use(routerMusic.allowedMethods())
    .use(bodyParser())
    .use(router.allowedMethods())
    .use(router.routes())
    .use(routerMusic.routes());
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
