class ValidacaoDicas{
    static validaTamanhoDica(dica){
        return dica.length >= 7
    }
    static validaDicaLetras(dica){
        const dicaNum = parseInt(dica)
        return dicaNum != dica
    }
}

export default ValidacaoDicas