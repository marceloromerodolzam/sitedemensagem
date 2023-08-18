//função para enviar mensagem
function enviarM(){
    const mensagemInput = document.getElementById('mensagem-input');
    const mensagem = mensagemInput.value.trim();
    if(mensagem !== ''){
        const chatMensagem = document.getElementById('chat-mensagem');
        const mensagemElemento = document.createElement('div');
        mensagemElemento.classList.add('mensagem');
        mensagemElemento.textContent = mensagem;
        chatMensagem.appendChild(mensagemElemento);
        mensagemInput.value = '';
        chatMensagem.scrollTop = chatMensagem.scrollHeight;
    }
}

//evento
document.getElementById('enviar-m').addEventListener('click', enviarM);
document.getElementById('mensagem-input').addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        enviarM();
    }
});