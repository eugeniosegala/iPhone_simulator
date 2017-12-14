/*!-----------------------------------------------------------------------------
 * iPhone_simulator
 * v1.0 - built 2017-11-09
 * Licensed under the MIT License.
 * http://www.testersite.it/github/easy_required/v1/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2017 Eugenio Segala
 * --------------------------------------------------------------------------*/

var audio = new Audio('audio/canzone.mp3');

function load_image(img, selettore) { // quando clicco su una app principale

  document.getElementById('telefono').src = img; // cambio la schermata con la variabile img

  if (selettore) { // se il secondo argomento è stato utilizzato
    var conteggio = document.querySelectorAll(".livello_1").length; // conto tutti tutti i livelli 1
    var i = 0;
    while (i < conteggio) { // avvio un ciclo per nasconderli
      document.querySelectorAll(".livello_1")[i].style.display = "none";
      i++; // incremento
    }
    selettore.nextElementSibling.style.display = "block"; // prendo l'elemento dopo quello appena cliccato
  }

  if (img == "img/iphone-on.jpg") { // ritorno alla home
    reset("block", "none");
  }

  if (img == "img/iphone-off.jpg") { // spengo il telefono
    reset("none", "none");
    audio.pause(); // FERMO AUDIO
    audio.currentTime = 0; // METTO AUDIO A 0
  }

}

function reset(x, y) { // ripristino le icone

  var conteggio = document.querySelectorAll(".livello_1").length; // conto i livelli 1 e passo gli argomenti
  var i = 0;
  while (i < conteggio) {
    document.querySelectorAll(".livello_1")[i].style.display = x;
    i++;
  }
  var conteggio = document.querySelectorAll(".livello_2").length; // conto i livelli 1 e passo gli argomenti
  var i = 0;
  while (i < conteggio) {
    document.querySelectorAll(".livello_2")[i].style.display = y;
    i++;
  }

}
