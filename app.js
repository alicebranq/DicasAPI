import express from "express";
import Dicas from "./controllers/Dicas.js"

dotenv.config()

const port =  process.env.PORT || 3000;
const app = express()

app.listen(port, () => {
    console.log(`Servidor online no endereço npm st`)
})

app.use(express.json())

Dicas.rotas(app)