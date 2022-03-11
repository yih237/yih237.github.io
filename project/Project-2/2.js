// set up text to print, each item in array is new line
// !!Source!! this javascript is adapted from https://www.w3schools.com/howto/howto_js_typewriter.asp
var aText = new Array(
    "My obsession with the garden and the events that take place in it began before I was familiar with that entity called consciousness. My mother taught me to read when I was very young, and she did this without telling me that there was something called the alphabet. I became familiar with words as if they were all wholly themselves, each one a world by itself, intact and self-contained, and able to be joined to other words if they wished to or if someone like me wanted them to. The book she taught me to read from was a biography of Louis Pasteur, the person she told me was responsible for her boiling the milk I drank daily, making sure that it would not infect me with something called tuberculosis. I never got tuberculosis, but I did get typhoid fever, whooping cough, measles, and persistent cases of hookworm and long worms. I was a “sickly child.” Much of the love I remember receiving from my mother came during the times I was sick. I have such a lovely memory of her hovering over me with cups of barley water (that was for the measles) and giving me cups of tea made from herbs (bush) that she had gone out and gathered and steeped slowly (that was for the whooping cough). For the typhoid fever, she took me to the hospital, the children’s ward, but she visited me twice a day and brought me fresh juice that she had squeezed or grated from fruits or vegetables, because she was certain that the hospital would not provide me with proper nourishment. And so there I was, a sickly child who could read but had no sense of consciousness, had no idea of how to understand and so make sense of the world into which she was born, a world that was always full of a yellow sun, green trees, a blue sea, and black people."
    , "  ", "  ", "My mother was a gardener, and in her garden it was as if Vertumnus and Pomona had become one: she would find something growing in the wilds of her native island (Dominica) or the island on which she lived and gave birth to me (Antigua), and if it pleased her, or if it was in fruit and the taste of the fruit delighted her, she took a cutting of it (really she just broke off a shoot with her bare hands) or the seed (separating it from its pulpy substance and collecting it in her beautiful pink mouth) and brought it into her own garden and tended to it in a careless, everyday way, as if it were in the wild forest, or in the garden of a regal palace. The woods: The garden. For her, the wild and the cultivated were equal and yet separate, together and apart. This wasn’t as clear to me then as I am stating it here. I had only just learned to read and the world outside a book I did not yet know how to reconcile."
    );
    var iSpeed = 9; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();