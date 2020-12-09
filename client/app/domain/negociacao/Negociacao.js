class Negociacao {

    //constructor define as propriedades de uma classe
    constructor (_data, _quantidade, _valor) {

        Object.assign(this, {
            _quantidade,
            _valor            
        });
        
        this._data = new Date(_data.getTime()), //criando uma nova referência
        Object.freeze(this); //congela para nao permitir alterações
    }

    //funções que definem comportamentos de uma classe são chamadas de métodos
    get volume(){
        return this._quantidade * this._valor;
    }

    //métodos acessadores para imprimir os valores -somente leitura
    // getData(){}

    //propriedade getter de acesso a leitura( é um método mas podemos acessar como propriedade)
    //metodo get -> se tentarmos atribuir um novo valor a propriedade ele será ignorado (sem mensagem de erro)
    get data(){
        return new Date(this._data.getTime()); // construção de uma nova data - copia - programação defensiva
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}