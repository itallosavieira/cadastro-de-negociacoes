class ImprimeLista {

    constructor() {

        this._lista = [];
    }

    _imprime(a, b) {

        this._lista.push(a.concat(b));
        return console.log(this._lista)
    }
}