// usei o express pra criar e configurar meu servidor instalando npm i express -y
const express = require("express")
const server = express()

// as ideias estão todas aqui...
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2728/2728995.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est maxime laudantium facere tenetur ipsum, illo corrupti repudiandae impedit, esse pariatur laborum quasi hic blanditiis fugit quia assumenda ratione? Deserunt?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2728/2728995.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est maxime laudantium facere tenetur ipsum, illo corrupti repudiandae impedit, esse pariatur laborum quasi hic blanditiis fugit quia assumenda ratione? Deserunt?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2728/2728995.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est maxime laudantium facere tenetur ipsum, illo corrupti repudiandae impedit, esse pariatur laborum quasi hic blanditiis fugit quia assumenda ratione? Deserunt?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2728/2728995.svg",
        title: "Cursos de Prog",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est maxime laudantium facere tenetur ipsum, illo corrupti repudiandae impedit, esse pariatur laborum quasi hic blanditiis fugit quia assumenda ratione? Deserunt?",
        url: "https://rocketseat.com.br"
    },
]


//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

//configuraçao do nunjucks 
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, // boolea verdadeiro ou false true ou false
})



//criei rota (/) depois do get
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    } 
    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideas", function(req, res) {

    const reversedIdeas = [...ideas].reverse()


    return res.render("ideas.html", {ideas: ideas})
})

// liguei meu servidor na porta 3000
server.listen(3000)