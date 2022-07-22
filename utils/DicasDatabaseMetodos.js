import { DicasDatabase } from "../infra/DicasDatabase.js";

class DicasDatabaseMetodo {
    /**
     * 
     * @param {Object} novaDica 
     * @returns Object
     */
    static adicionarDica(novaDica) {
        DicasDatabase.push(novaDica) 
        return DicasDatabase;
    }
}
