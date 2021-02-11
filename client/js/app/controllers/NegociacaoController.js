class NegociacaoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $("#valor");
    }

    adiciona(event) {

        event.preventDefault();

        let negocio = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negocio);
        console.log(DateHelper.dataParaTexto(negocio.data))
    }
}