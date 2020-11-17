//  DARK/LIGHT MODE
function changeCss() {
    var clicked = document
    .getElementById('pagestyle')
    .classList[0] === 'dark';
  
    var element = document.getElementById('pagestyle');
    var  icone = document.body;
  
    if (clicked) {
     element.href = 'css/light.css';
     element.classList.remove('dark')
     element.classList.add('light');
     icone.classList.remove('dark')
     icone.classList.add('light');
     
    } else {
     element.href = 'css/dark.css';
     element.classList.remove('light')
     element.classList.add('dark');
     icone.classList.remove('light')
     icone.classList.add('dark');
    }
  }
//  DARK/LIGHT MODE

// BOUTON MAJUSCULES
$(document).ready(function(){
    $("span.special.deux").click(function(){
      $("span.lettres").toggleClass("maj");
    });
  });
// BOUTON MAJUSCULES