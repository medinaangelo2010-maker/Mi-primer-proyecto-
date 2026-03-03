let pantalla = document.getElementById('pantalla');

function operar(valor) {
    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = '';
}

function calcular() {
    try {
        // eval realiza la operación matemática que esté escrita en la pantalla
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Error';
    }
}
