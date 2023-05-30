setTimeout(() => {
    var y = document.getElementById("corpo")
    y.addEventListner("click", function musica2(){
        const a = document.getElementById("musica")
        a.play();
    })
},"1000")