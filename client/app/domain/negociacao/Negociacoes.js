class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes); // copia do array para evitar alterações
    }
    get volumeTotal() {
        return this._negociacoes.reduce(
            (total, item) => total + item.volume,
            0
        );
    }
}
