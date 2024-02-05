document.querySelectorAll('.column img').forEach(image => {
    image.onclick = () =>{
        // Obtém o elemento com a classe .popup-img e o mesmo id da imagem clicada
        let popup = document.querySelector(`.popup-img#${image.id}`);

        // Se encontrou um elemento correspondente, exibe ele e esconde os outros
        if (popup) {
            popup.style.display = 'flex';
            popup.querySelector('img').src = image.getAttribute('src');
        }    
        document.querySelector('body').style.overflow = 'hidden';
        
    }
    
});
document.querySelectorAll('.popup-img span').forEach(span => {
    span.onclick = () => {
        let popup = span.closest('.popup-img');
        // Esconde esse elemento
        popup.style.display = 'none';
        span.parentElement.style.display = 'none';
        
        document.querySelector('body').style.overflow = 'auto';
    }
});