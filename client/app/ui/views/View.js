class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    //model-> parametro para o modelo cujo template() irá se basear
    //aqui está recebendo o model
    update(model) {
        this._elemento.innerHTML = this.template(model); //inerhtml -> setter (chama outro método por debaixo dos panos)
    }
    template(model) {
        throw new Error("você precisa implementar o método template");
    }
}
