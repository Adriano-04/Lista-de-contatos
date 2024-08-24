const form = document.getElementById('Registro');
const addNumeros = []
let Linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    salvaLinha()
    addLinha()
})

function salvaLinha() {
    const Nomes = document.getElementById('nome');
    const Numeros = document.getElementById('numero');
    
    if (addNumeros.includes(Numeros.value)) {
        alert('Esse número Já foi adicionado')
    } 
    else {
            addNumeros.push(Numeros.value);

            let Linha = ''
            Linha += '<tr>'
            Linha += `<td>${Nomes.value}</td>`
            Linha += `<td>${Numeros.value}</td>`
            Linha += '</tr>'

            Linhas += Linha;

            Nomes.value = ''
            Numeros.value = ''

            }   
}

function addLinha() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = Linhas;
}