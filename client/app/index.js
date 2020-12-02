var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(e){
    e.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function (campo) {

        //cria uma td sem informações
        var td = document.createElement('td');

        //atribui o valor do campo a td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);
    });
    //nova td que armazena o volume da negociação
    var tdVolume = document.createElement('td');
    //as posições 1 e 2 do array armazenam os campos quantidade e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;
    //add a td que faltava a tr
    tr.appendChild(tdVolume);

    //add a tr ao tbody
    tbody.appendChild(tr);

    //limpeza
    campos[0].value = '';
    campos[2].value = 1;
    campos[1].value = '';
    campos[0].focus();
});