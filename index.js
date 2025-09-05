import { servidor } from "./config.js"

servidor.get("/",(req,res)=>{

})

servidor.post ("/registro",(req,res)=> {
    const { nombre,apellido,contra,correo} =req.body
    res.json( {nombre,apellido,contra,correo})
})  