const elements = document.querySelectorAll('.duvida');

elements.forEach(function(element) {
    element.addEventListener('click', function() {
        element.classList.toggle('ativa')
    })
})