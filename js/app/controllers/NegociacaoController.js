
class NegociacaoController {

    constructor() {

        
        const $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        
        this._negociacoes  = new Negociacoes()
        this._negociacoesView = new NegociacoesView('#negociacoes')
        this._negociacoesView.update(this._negociacoes)
        
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemoView('#info')
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event){
       
        console.log('adicionando')
        event.preventDefault()               
        this._negociacoes.adiciona(this._criarNegociacao())
        this._mensagem.texto = 'Negociação adiciona com sucesso'
        this._negociacoesView.update(this._negociacoes)
        this._mensagemView.update(this._mensagem)
        this._limpaForm()
           
        
    }

    apaga(){

        console.log('apagando')
        this._negociacoes.esvazia()
        this._negociacoesView.update(this._negociacoes)
        this._mensagem.texto = 'Negociações apagadas com sucesso'
        this._mensagemView.update(this._mensagem)
    
    }


    _limpaForm(){

        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
                
    }

    _criarNegociacao(){

        return new Negociacao(
                        
                        DataConverter.paraData(this._inputData.value),
                        parseInt(this._inputQuantidade.value),
                        parseFloat(this._inputValor.value)

                    
                    )

    }
}