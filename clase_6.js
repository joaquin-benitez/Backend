import express from "express";

const app= express();

app.get("/bienvenida", (req, res)=>{
    res.send(`
    <html>
    <body>
    <p style="color:blue">ejemplo que tengo que colorear de azul con style</p>
    </body>
    </html>
    `)
    
});

app.get("/usuario",(req, res)=>{
    res.send({
        firsName:"ale",
        lastName: "suarez",
    })
})

app.listen(8080, () => {
    console.log("server listening on port 8080")
});



