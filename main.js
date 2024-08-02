function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    console.log(idElementoAudio)
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let count = 0;

while(count < listaDeTeclas.length) {
    const instrumento = listaDeTeclas[count].classList[1];
    listaDeTeclas[count].onclick = () => {
        tocaSomPom('#som_'+instrumento);
    };
    count++
    console.log(count)
}