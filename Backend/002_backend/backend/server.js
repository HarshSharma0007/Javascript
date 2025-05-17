import express from "express";

const app = express()

// app.get("/", (req, res)=>{
//     res.send("ahello")
// })

app.get("/jokes", (req,res)=>{
    const jokes = [
        {   id: 1,
            title: "joke 1",
            content: "content joke 1"
        },       
        {   id: 2,
            title: "joke 2",
            content: "content joke 2"
        },
        {   id: 3,
            title: "joke 3",
            content: "content joke 3"
        },
        {
            id: 4,
            title: "joke 4",
            content: "content joke 4"
        },
        {   id: 5,
            title: "joke 5",
            content: "content joke 5"
        }
    ]
    res.send(jokes)
})
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
    
})