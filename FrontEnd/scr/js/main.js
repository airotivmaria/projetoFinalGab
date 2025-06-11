document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('lista-filmes');

    try {
        const resposta = await fetch('http://localhost:3000/filmes');
        const filmes = await resposta.json();

        filmes.forEach(filme => {
            const card = document.createElement('div');
            card.classList.add('card-filme');

            card.innerHTML = `
                <h3>${filme.titulo}</h3>
                <p class="genero">${filme.generoDoFilme || 'Sem gênero'}</p>
                <p><strong>Ano:</strong> ${filme.anoLancamento || 'Desconhecido'}</p>
                <p><strong>Comentário:</strong> ${filme.descricao || 'Sem comentários'}</p>
                <p class="avaliacao">${'★'.repeat(filme.avaliacao || 0)}${'☆'.repeat(5 - (filme.avaliacao || 0))}</p>
            `;

            container.appendChild(card);
        });

    } catch (erro) {
        console.error('Erro ao carregar filmes:', erro);
        container.innerHTML = '<p>Erro ao carregar filmes.</p>';
    }
});
aaaaaaaaaaaaa