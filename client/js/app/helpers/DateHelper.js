class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada.')
    }

    static textoParaData(texto) {

        const regexp = /\d{4}-\d{2}-\d{2}/;
        if (!regexp.test(texto)) throw new Error('Deve estar no formato "yyyy-mm-dd"')

        return new Date(...texto.split('-').map( (el, i) => el - i % 2 ));
    }

    static dataParaTexto(data) {

        const dia = data.getDate();
        const mes = (data.getMonth() + 1);
        const ano = data.getFullYear();

       return `Data: ${dia}/${mes}/${ano}`
    }

}