class MensagemoView extends View {

    template(model){

        return model.texto?`<p class="info-data">${model.texto}</p>`:`<p></p>`

    }

}