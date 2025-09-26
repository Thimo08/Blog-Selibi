window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const livroId = urlParams.get('livro');
    const livro = obras[livroId];
    const container = document.getElementById('detalhe-obra-container');

    if (livro) {
        document.title = `Obra: ${livro.titulo} - Ateliê de Histórias`;
        const conteudoHTML = `
            <div class="obra-detalhe-container">
                <div class="obra-capa">
                    <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}">
                </div>
                <div class="obra-info">
                    <span class="post-category">${livro.categoria}</span>
                    <h1>${livro.titulo}</h1>
                    
                    <h2>Sinopse</h2>
                    <p>${livro.sinopse}</p>
                    
                    <h2>Temas Abordados</h2>
                    <ul>
                        ${livro.temas.map(tema => `<li>${tema}</li>`).join('')}
                    </ul>

                    <h2>Detalhes da Ilustração</h2>
                    <p>${livro.ilustracao}</p>

                    <a href="index.html#obras" class="back-link">&larr; Voltar para a galeria de obras</a>
                </div>
            </div>
        `;
        container.innerHTML = conteudoHTML;
    } else {
        container.innerHTML = `
            <div style="text-align: center;">
                <h2>Ops! Obra não encontrada.</h2>
                <p>Parece que o livro que você está procurando não existe em nosso ateliê.</p>
                <a href="index.html" class="back-link">&larr; Voltar para a página inicial</a>
            </div>
        `;
    }
};