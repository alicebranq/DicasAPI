import DicasDatabase from "../infra/DicasDatabase.js"
import ValidacaoDicas from "../services/ValidacaoDica.js"
import { DicasDatabase } from "../infra/DicasDatabase.js"
import DicasModels from "../models/DicasModels.js";


class Dicas {
    static rotas(app){

        app.get("/tips", (req, res) => {
            const response = DicasDatabaseMetodos.geradorDicas();
            res.status(200).json(response);
        })

        app.post("/create", (req, res)=> {
            const dicaRecebida = new DicasModels(...Object.values(req.body))
            const response = DicasDatabase.adicionaDica(dica);
            res.status(200).json(response);
        })
    }
}