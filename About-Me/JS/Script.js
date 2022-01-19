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