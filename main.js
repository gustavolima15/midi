function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    console.log(idElementoAudio)
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = () => {
        tocaSomPom(idAudio);
    };

    tecla.onkeydown = () => {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}