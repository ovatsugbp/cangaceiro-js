class NegociacaoController {
    constructor() {
        //com o bind, o $ mantém document em seu contexto
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoes");

        this._negociacoesView.update(this._negociacoes); // renderizando o template

        this._mensagem = new Mensagem();

        this._mensagemView = new MensagemView("#mensagemView");
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação criada com sucesso";
        this._negociacoesView.update(this._negociacoes); // renderizando o template
        this._mensagemView.update(this._mensagem);
        this._limpaForm();
    }

    _limpaForm() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}
