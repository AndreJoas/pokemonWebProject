
setTimeout(() => {
    var x = document.getElementById("corpo")
    x.addEventListener("click", function musica(){
        const a = document.getElementById("musica")
        a.play();
    })
  }, "1000");