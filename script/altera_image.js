let cont = 0
const image = [
    'image/white-24-right/2x/outline_navigate_next_white_24dp.png',
    'image/white-24-left/2x/outline_chevron_left_white_24dp.png'
]

function altera_image(){
    

    var image_seta = document.getElementById('imagem_seta');
    if(cont ==0){
        image_seta.src = image[cont]
        cont = 1
    }
    else if(cont == 1){
      
        image_seta.src =  image[cont]
        cont = 0
    }
}