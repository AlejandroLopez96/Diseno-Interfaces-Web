function iniciar(){ 
    var elemento=document.getElementById('lienzo'); 
    lienzo=elemento.getContext('2d'); 
    lienzo.strokeRect(0,0,elemento.width,elemento.height);
    
    lienzo.beginPath();
    lienzo.moveTo(100,50);
    lienzo.lineTo(160,50);
    lienzo.lineTo(190,100);
    lienzo.lineTo(160,145);
    lienzo.lineTo(100,145);
    lienzo.lineTo(71,100);
    lienzo.lineTo(100,50);
    lienzo.fillStyle="#FE0000" 
    lienzo.fill();
    lienzo.lineWidth=3;
    lienzo.strokeStyle = '#ffffff';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(98,47);
    lienzo.lineTo(162,47);
    lienzo.lineTo(194,100);
    lienzo.lineTo(162,148);
    lienzo.lineTo(98,148);
    lienzo.lineTo(68,100);
    lienzo.lineTo(99,46);
    lienzo.lineWidth=3;
    lienzo.strokeStyle = '#ff0000';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(130,149);
    lienzo.lineTo(130,350);
    lienzo.lineWidth=18;
    lienzo.strokeStyle = '#838383';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(295,205);
    lienzo.lineTo(375,150);
    lienzo.lineTo(455,205);
    lienzo.lineWidth=10;
    lienzo.strokeStyle = '#412203';
    lienzo.stroke();
    lienzo.fillStyle="#412203";
    lienzo.fill();
    lienzo.closePath();

    lienzo.beginPath();
    lienzo.moveTo(300,300);
    lienzo.lineTo(300,200);
    lienzo.lineTo(450,200);
    lienzo.lineTo(450,300);
    lienzo.lineWidth=6;
    lienzo.strokeStyle = '#0c6d62';
    lienzo.stroke();
    lienzo.fillStyle="#0c6d62";
    lienzo.fill();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(295,300);
    lienzo.lineTo(295,195);
    lienzo.lineWidth=6;
    lienzo.strokeStyle = '#ffffff';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(455,300);
    lienzo.lineTo(455,195);
    lienzo.lineWidth=6;
    lienzo.strokeStyle = '#ffffff';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(425,165);
    lienzo.lineTo(425,185);
    lienzo.lineWidth=20;
    lienzo.strokeStyle = '#412203';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(335,210);
    lienzo.lineTo(335,230);
    lienzo.lineWidth=20;
    lienzo.strokeStyle = '#c9c9c9';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(380,210);
    lienzo.lineTo(380,230);
    lienzo.lineWidth=20;
    lienzo.strokeStyle = '#c9c9c9';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(420,210);
    lienzo.lineTo(420,230);
    lienzo.lineWidth=20;
    lienzo.strokeStyle = '#c9c9c9';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(335,250);
    lienzo.lineTo(335,270);
    lienzo.lineWidth=20;
    lienzo.strokeStyle = '#c9c9c9';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(420,250);
    lienzo.lineTo(420,270);
    lienzo.lineWidth=20;
    lienzo.strokeStyle = '#c9c9c9';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(380,250);
    lienzo.lineTo(380,295);
    lienzo.lineWidth=20;
    lienzo.strokeStyle = '#412203';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.beginPath();
    lienzo.moveTo(0,300);
    lienzo.lineTo(500,300);
    lienzo.lineWidth=30;
    lienzo.strokeStyle = '#00830a';
    lienzo.stroke();
    lienzo.closePath();
    
    lienzo.globalCompositeOperation="xor";
    lienzo.font="bold 24px verdana, sans-serif";
    lienzo.textBaseline="middle";
    lienzo.fillText("STOP", 95,100);
    
    var imagen = new Image();
    imagen.src="humo.png";
    
    imagen.addEventListener("load", function(){
        lienzo.drawImage(imagen,420,115,50,50)}, false);
    lienzo.drawImage(imagen,420,115,50,50);
}window.addEventListener("load", iniciar, false);