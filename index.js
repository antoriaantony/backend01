import bcrypt from "bcryptjs"

import { servidor } from "./config.js"

servidor.get("/",(req,res)=>{

})

servidor.post ("/registro",(req,res)=> {
    const salt = bcrypt.genSaltSync(10);
    const { nombre,apellido,contra,correo} =req.body
    const hash = bcrypt.hashSync(contra, salt);
    res.send(hash)

})  