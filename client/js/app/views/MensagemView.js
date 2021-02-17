class MensagemView extends View {
    
    constructor(element) {

        super(element);
    }

    template(model) {


        return model.texto ? `<p class="alert-info"> ${model.texto} </p>` : '<p></p>';
    }
}