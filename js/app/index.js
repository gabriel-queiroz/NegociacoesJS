var $campos = [

   document.querySelector('#data'),
   document.querySelector('#quantidade'),
   document.querySelector('#valor')

];

$campos.forEach(a => console.log(a));

var $tbody  = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit',function (event) {

    event.preventDefault();

    var $tr = document.createElement('tr');

    $tr.classList.add('table-negociacao');

    $campos.forEach(function (campo) {

        var $td = document.createElement('td');

        $td.classList.add('table-data');

        $td.textContent = campo.value;

        $tr.appendChild($td);

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = $campos[1].value * $campos[2].value;

    $tr.appendChild(tdVolume);

    $tbody.appendChild($tr);

    $campos[0].value = '';

    $campos[1].value = 1;

    $campos[2].value = 0;

    $campos[0].focus();



});

