document.getElementById("b_modo").addEventListener('click', function(){
    if(document.getElementById('estilo').getAttribute('href') == "css/light.css" ){
        document.getElementById('estilo').setAttribute('href', "css/dark.css");
        document.getElementById('b_modo').innerHTML = 'Cambiar al modo claro';
        console.log("Modo Oscuro");
    }else{
        document.getElementById('estilo').setAttribute('href', "css/light.css");
        document.getElementById('b_modo').innerHTML = 'Cambiar al modo oscuro';
        console.log("Modo Claro.");
    }
});