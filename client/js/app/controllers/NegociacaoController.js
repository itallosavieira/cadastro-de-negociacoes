class NegociacaoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $("#valor");
    }

    adiciona(event) {

        event.preventDefault();

        const helper = new DateHelper();

        let negocio = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negocio);
        console.log(helper.dataParaTexto(negocio.data))
    }
}