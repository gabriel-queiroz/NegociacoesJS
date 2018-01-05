class DataConverter{

    constructor(){

        throw new Error("Esse classe não deve ser instânciada")

    }

   static paraTexto(data){

   return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`

    }

    static paraData(texto){

        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve ser no formador yyyy-mm-dd')

        return new Date(...texto.split('-')
                        .map( (item,indice) => item - indice % 2))
    }


}