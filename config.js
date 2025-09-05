import express from "express"
import hbs from "hbs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const servidor = express()
servidor.use(express.json())

servidor.listen(4000)


export{
    servidor
}

