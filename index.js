import { servidor } from "./config.js"

servidor.get("/",(req,res)=>{

})

servidor.post ("/registro",(res,req)=> {
    const { nombre,apellido,contra,correo} =req.body
    res.send( nombre,apellido,contra,correo)
})  