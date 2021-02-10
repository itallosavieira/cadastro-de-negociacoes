class NegociacaoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $("#valor");
    }

    adiciona(event) {

        event.preventDefault();

        const data = new Date(this._inputData.value.split('-'));

        let negocio = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negocio)
    }


}