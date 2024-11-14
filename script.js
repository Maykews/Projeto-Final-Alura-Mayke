// script.js

// Ao carregar a página, exibe um alert com a mensagem de boas-vindas
window.onload = function() {
    alert("Bem-vindo ao mundo de Los Santos!");
};

// Exemplo de interatividade: alterar a cor do título quando clicado
document.querySelector('.site-header h1').addEventListener('click', function() {
    this.style.color = '#e63946'; // Muda a cor do título para vermelho quando clicado
});
