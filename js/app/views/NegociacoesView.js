class NegociacoesView extends View {


    template(model){
        
        return`
        <p class="table-title"> Negociações Realizadas </p>

        <table class="table-table">
        
        
              <thead>
        
                <tr class="table-header">
        
                  <th class="table-header-data">Data</th>
                  <th class="table-header-data">Quantidade</th>
                  <th class="table-header-data">Valor</th>
                  <th class="table-header-data">Volume</th>
                </tr>
        
              </thead>
        
              <tbody>

                    
              ${model.paraArray().map( negociacao => 
                    
                    `<tr class="table-negociacao">
                        
                        <td class="table-data">${DataConverter.paraTexto(negociacao.data)}</td>
                        <td class="table-data">${negociacao.quantidade}</td>
                        <td class="table-data">${negociacao.valor} </td>
                        <td class="table-data">${negociacao.volume}</td>
                    
                     </tr>`).join('')}
                    
                   

              </tbody>
        
              <tfoot>   
                
                <tr class="table-negociacao">    
                    
                    <td class="table-data">  </td>
                    <td class="table-data">  </td>
                    <td class="table-data">  </td>
                    <td class="table-data"> ${model.volumeTotal} </td>

                </tr>

        
        
              </tfoot>
        
        
            </table> 

            `  
    }

}