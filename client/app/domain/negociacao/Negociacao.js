class Negociacao {

    //constructor define as propriedades de uma classe
    constructor(data, quantidade, valor) {
        this._data = data; 
        this._quantidade = quantidade;
        this._valor = valor;
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
        return this._data;
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}