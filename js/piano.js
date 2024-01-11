var notas = document.querySelectorAll('.notas')
var audio = document.querySelector('audio');

notas.forEach(tecla => {
    console.log(tecla)
    console.dir(tecla.dataset.nota)

    tecla.addEventListener('click',()=>{
        console.dir(tecla.dataset.nota)
        audio.src=`notas/${tecla.dataset.nota}.mp3`
        audio.play()

    })

});