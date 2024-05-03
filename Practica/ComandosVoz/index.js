let rec = new webkitSpeechRecognition();




rec.continuous = true;
rec.lang = 'es-ES';
rec.interimResult = false;


rec.onresult = (event) => {
    let texto = event.results[event.results.length - 1][0].transcript;
    console.log(texto);

    if (texto.toLowerCase().indexOf("hola") > -1) {
        
        console.log("Hola")

    }
    if (texto.toLowerCase().indexOf("temperatura") > -1) {
        
        console.log("Hacen 20 grados")

    }
    if (texto.toLowerCase().indexOf("youtube") > -1) {
        
        window.open("https://www.youtube.com/"); 

    }
    
}

rec.start();




