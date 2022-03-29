function updateBackground() {
    var 
      hr = (new Date()).getHours(),
      body = document.body,
      bstyle = body.style,    
      hello = document.querySelector(".hello");    
    if (hr < 10) {
      bstyle.backgroundColor = "black";
      bstyle.color = "white";
      bstyle.backgroundImage = "url('../morning.png')"
      hello.innerText = "good morning!";
    }else if(hr > 10 && hr <= 16) {
        bstyle.backgroundColor = "black";
        bstyle.color = "white";
        bstyle.backgroundImage = "url('../day.png')"
        hello.innerText = "good day!";
    }
     else if (hr > 16 && hr<=20) {
      bstyle.backgroundColor = "black";
      bstyle.color = "white";
      bstyle.backgroundImage = "url('../evening.png')"
      hello.innerText ="good evening!";
    } else {
      bstyle.backgroundColor = "black";
      bstyle.color = "white";
      bstyle.backgroundImage = "url('../night.png')"

      hello.innerText = "good night!";
    } 
  }
  
  setInterval(updateBackground, 1000 * 60);
  updateBackground();