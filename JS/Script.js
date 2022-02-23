//Fazer rolagem suave na navegação interna
const menuItems = document.querySelectorAll('.menu a[href^="#"]');//Consntante para pegar o valor do href

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})
function scrollToIdOnClick(event){//Função para pegar o ID no click
    event.preventDefault();
        const to = getScrollTopByHref(event.target);  
    scrollToPosition(to);
}
function scrollToPosition(to){//Função para mover suavemente até o ID escolhido
    var largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if (largura < 850){
        window.scroll({
            top: to - 50,
            behavior:"smooth", 
        });
    }
    else{
        window.scroll({
            top: to - 30,
            behavior:"smooth", 
        });
    }
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

    //evento para caso clique fora do menu...
    $(document).click(function(e) {
        var target = e.target;
        var largura = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        $('.navbar').each(function() {
            var $this = $(this);
            var dropdown = $this.prev('.Nav-button');
            if (dropdown[0] != target && largura < 850){
                $(this).hide();
            };
        });
    });
});

//Evento para fechar o dropdown após o clique no item.
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

//Função para o botão do tema
$(document).ready(function(){
    var botao = $('.Nav-ThemeButton')
    var tema = "Escuro"
    botao.on('click', function(event){
        
        if (tema == "Escuro"){
            document.getElementById("IdImgTheme").src="IMG/LightOff.png";
            document.getElementById("SubTitulo").style.color="#2b2318";
            
            let AllAstyle = document.querySelectorAll(".Astyle");
            for (let index = 0; index < AllAstyle.length; index++){
                AllAstyle[index].style.color = "#78b3a4";
            }

            document.body.style.background="#e9f2f9";
            let AllSection = document.querySelectorAll(".Sections");
            for (let index = 0; index < AllSection.length; index++){
                AllSection[index].style.background = "#736C63";
            }
            tema="Claro"
        }
        else if(tema == "Claro"){
            document.getElementById("IdImgTheme").src="IMG/LightOn.png";
            document.body.style.background="#0F1026";
            document.getElementById("SubTitulo").style.color="#F2911B";
            let AllAstyle = document.querySelectorAll(".Astyle");
            for (let index = 0; index < AllAstyle.length; index++){
                AllAstyle[index].style.color = "#4973F2";
            }
            let AllSection = document.querySelectorAll(".Sections");
            for (let index = 0; index < AllSection.length; index++){
                AllSection[index].style.background = "#131212";
            }
            tema="Escuro"
        }
    });
});
