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


// BOUTON CARACTERES SPECIAUX
$(document).ready(function(){
    $("span.special-character-key").click(function(){
      $("span.lettres").toggleClass("hidden")
      $("span.chiffres").toggleClass("hidden");
    });
  });
  // BOUTON CARACTERES SPECIAUX


// $(document).ready(function(){
//         $('span.chiffres').click(function(){
//               var value = $(this).val();
//               $('#notepad').val(value);
//     });
// });  

// $(document).ready(function(){    
//     $('span.chiffres').click(function(){
//         // Either use $(this) or $(e.target).
//         $('#notepad').text($(this).val());
//     });
// });

$(document).ready(function(){
    $('#button1').click(function(){
          var value = $(this).val();
          $('#notepad').val(value);
});
});



function setLetter(letter) {
    document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + letter;
}
            