var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).chekced = true;
    counter++;
    if (counter > 4){
        counter = 1;
    }
}, 5000);