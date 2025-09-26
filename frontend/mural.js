document.addEventListener('DOMContentLoaded', () => {
    const messagesGrid = document.getElementById('messages-grid');
    const messageForm = document.getElementById('message-form');

    // Função para carregar as mensagens do servidor
    async function loadMessages() {
        try {
            const response = await fetch('/api/messages');
            const messages = await response.json();

            messagesGrid.innerHTML = ''; // Limpa o mural antes de adicionar as novas

            // Inverte a ordem para mostrar as mais recentes primeiro
            messages.reverse().forEach(msg => {
                const postIt = document.createElement('article');
                postIt.className = 'mural-post-it';
                
                const messageText = document.createElement('p');
                messageText.textContent = msg.message;
                
                const authorName = document.createElement('h4');
                authorName.textContent = `- ${msg.name}`;

                postIt.appendChild(messageText);
                postIt.appendChild(authorName);
                messagesGrid.appendChild(postIt);
            });
        } catch (error) {
            console.error('Erro ao carregar mensagens:', error);
        }
    }

    // Função para enviar uma nova mensagem
    messageForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const nameInput = document.getElementById('name-input');
        const messageInput = document.getElementById('message-input');

        const newMessage = {
            name: nameInput.value,
            message: messageInput.value
        };

        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMessage),
            });

            if (response.ok) {
                nameInput.value = '';
                messageInput.value = '';
                loadMessages(); // Recarrega as mensagens para mostrar a nova
            } else {
                alert('Erro ao enviar mensagem.');
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    });

    // Carrega as mensagens assim que a página abre
    loadMessages();
});