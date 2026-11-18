import express from 'express'

const app = express()


const PORT = 8082

app.get('/' , (req , res)=>{
    res.send("hello from the Server")
})

app.post('/chat' , (req , res)=>{
     // get prompt
     // process the prompt through your model
     // send back the generated response
})



app.listen(PORT , ()=>{
    console.log(`Server Started at ${PORT}`)
})