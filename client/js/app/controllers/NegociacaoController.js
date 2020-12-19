class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document);

        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._inputData = $('#data');

    }

    adiciona(event) {
        event.preventDefault();
        
        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);
    }
}