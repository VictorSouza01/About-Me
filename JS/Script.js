//Fazer rolagem suave na navegação interna
const menuItems = document.querySelectorAll('.menu a[href^="#"]');//Consntante para pegar o valor do href

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})
function scrollToIdOnClick(event){//Função para pegar o ID no click
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 30;
    
    scrollToPosition(to);
}
function scrollToPosition(to){//Função para mover suavemente até o ID escolhido
    window.scroll({
        top: to,
        behavior:"smooth", 
    });
}
function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}


//Evento que verifica o tamanho da janela para que posso corrigir o bug do evento de dropdown
window.addEventListener('resize', function(){
    var largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    
    if (largura > 850){
        document.getElementById("NavBarId").style.display = "block";
    }
    else{
        document.getElementById("NavBarId").style.display = "none";
    }
});

//Evento de dropdown
$(document).ready(function() {
    var botao = $('.Nav-button');
    var dropDown = $('.navbar');  

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});


$(document).ready(function() {
    var botao = $('.btnMenu');
    var dropDown = $('.navbar');

    botao.on('click', function(event){
        var largura = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        if (largura > 850){
            document.getElementById("NavBarId").style.display = "block";
        }
        else{
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
        }
    });
});
