function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    video=document.getElementById('medio');
    video.addEventListener('click', presionar, false);
}
function presionar(){
    if(!video.paused && !video.ended){
        video.pause();
        window.clearInterval(bucle);
    }else{
        video.play();
        bucle=setInterval(procesarCuadros, 33);
    }
}
function procesarCuadros(){
    lienzo.drawImage(video,0,0);
    var info=lienzo.getImageData(0,0,320,240);
    var pos;
    var gris;
    for(x=0;x<=320;x++){
        for(y=0;y<=240;y++){
            pos=(info.width*4*y)+(x*4);
            /*Con esto lo ponemos el video en escala de grises
            gris=parseInt(info.data[pos]*0.2989 + info.data[pos+1]*0.5870 + info.data[pos+2]*0.1140);
            Esto es para nivelar en escala de grises RGB es nivel de gris = 30%rojo 59% y 11% azul
            info.data[pos]=gris;
            info.data[pos+1]=gris;
            info.data[pos+2]=gris;*/
            
            /* Con esto ponemos el video en negativo
            info.data[pos]=255-info.data[pos];
            info.data[pos+1]=255-info.data[pos+1];
            info.data[pos+2]=255-info.data[pos+2];*/
            
            /*Con esto lo ponemos en blanco y negro*/
            color = info.data[pos]+info.data[pos+1]+info.data[pos+2];
            if(color < 280){
                info.data[pos]=0;
                info.data[pos+1]=0;
                info.data[pos+2]=0;
            } else{
                info.data[pos]=255;
                info.data[pos+1]=255;
                info.data[pos+2]=255;
            }
            
        }
    } 
    lienzo.putImageData(info,0,0); 
} window.addEventListener("load", iniciar, false);