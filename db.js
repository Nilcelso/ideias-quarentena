const sqlite3 = require ('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {
    db.run (`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );    
    
    `)
    
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `

    const values = [
        "https://image.flaticon.com/icons/svg/2728/2728995.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est maxime laudantium facere tenetur ipsum, illo corrupti repudiandae impedit, esse pariatur laborum quasi hic blanditiis fugit quia assumenda ratione? Deserunt?",
        "https://rocketseat.com.br"

    ]


    db.run(query, values, function(err) {
        if (err) return console.log(err)

        console.log(this)
    })
})