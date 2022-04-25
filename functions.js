function contagem() {
    let quantidade_notas = prompt("Informe a quantidade notas:");
    let nota;
    let contador = 0;
    let i = 0;

    while (i < quantidade_notas) {
        nota = prompt("Informe uma nota");

        if (nota >= 50) {
            contador = contador + 1;
        }

        i = i + 1;
    }
    document.getElementById("resultados").innerHTML = ("Número de alunos que passaram no exame: " + contador);
}

function fibonacci() {
    let quantidade_termos = prompt('Quantos termos da sequencia de Fibonacci você deseja exibir?')
    let primeiro_termo = 0
    let y = 1
    let z = 0
    let resultados = []
    for (let i = 0; i < quantidade_termos; i++) {
        resultados.push(primeiro_termo)
        z = primeiro_termo + y
        primeiro_termo = y
        y = z
    }
    document.getElementById("resultados").innerHTML = ("Os elementos do Fibonacci são: " + resultados);
}

function mdc(){
    let primeiro_numero = prompt('Digite o primeiro número');
    let segundo_numero = prompt('Digite o segundo numero');

    for(let i = primeiro_numero; i>0; i--){
        if(primeiro_numero%i == 0 && segundo_numero%i == 0){
            document.getElementById("resultados").innerHTML = ('O MDC de ' + primeiro_numero + ' e de ' + segundo_numero + ' é ' + i);
            break;
        }
    }
}

function numeroPrimo(){
    let numero = prompt("Digite um número: ");
       let contador = 0;
       for (i=numero; i>0; i--){
           if (numero%i == 0){
               contador++;
           }
       }
       if (contador > 2){
            document.getElementById("resultados").innerHTML = ("O número " + numero + " não é primo")
       }    
       else{
            document.getElementById("resultados").innerHTML = ("O número " + numero + " é primo")
       }}

   
function order(){
    var items_list = [];
    
    function start(){
        var qta_numeros = prompt("quantidade de numeros: ")
        for (let index = 0; index < qta_numeros; index++) {
            var value = parseInt(prompt("digite o " + (index+1) + " termo:"))
            items_list.push(value)
        }
        var sortedArray = quickSort(items_list, 0, items_list.length - 1);
        document.getElementById("resultados").innerHTML = ("O resultado do quickSort é: " + sortedArray);
    }
    
    function swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    
    function partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(items, index, right);
            }
        }
        return items;
    }
    // first call to quick sort
    start();
    }

    function somatorio(){
        let quantidade_numeros = prompt("Informe a quantidade de números:");
        let numero;
        let soma = 0;
        let i = 0;
        
        while (i < quantidade_numeros) {
          numero = parseInt(prompt("Informe um número"));
          soma = soma + numero;
          i = i + 1;
        }
        
        document.getElementById("resultados").innerHTML = ("A soma dos " + quantidade_numeros + " números é: " + soma);
      }