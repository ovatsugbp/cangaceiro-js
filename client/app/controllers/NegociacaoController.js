class NegociacaoController{
    constructor() {

        //com o bind, o $ mantém document em seu contexto
        let $ = document.querySelector.bind(document);
        
        this._inputData = $("#data");
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adiciona(event){
        event.preventDefault();
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, i) => item - i % 2)
            );

        
        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        console.log(negociacao);
    }
}