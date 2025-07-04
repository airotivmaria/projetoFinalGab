document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('lista-filmes');
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario || !usuario.email) {
        container.innerHTML = '<p>Usuário não está logado.</p>';
        return;
    }

    try {
        const resposta = await fetch(`http://localhost:3000/filmes?email=${encodeURIComponent(usuario.email)}`);
        const filmes = await resposta.json();

        if (!filmes.length) {
            container.innerHTML = '<p>Você ainda não adicionou nenhum filme.</p>';
            return;
        }

        filmes.forEach(filme => {
            const card = document.createElement('div');
            card.classList.add('card-filme');
            card.innerHTML = `
                <h3>${filme.titulo}</h3>
                <p>${filme.generoDoFilme}</p>
                <p><strong>Ano:</strong> ${filme.anoLancamento}</p>
                <p>${filme.descricao}</p>
                <p class="avaliacao">${'★'.repeat(filme.avaliacao || 0)}${'☆'.repeat(5 - (filme.avaliacao || 0))}</p>
            `;
            container.appendChild(card);
        });
    } catch (erro) {
        console.error('Erro ao carregar filmes:', erro);
        container.innerHTML = '<p>Erro ao carregar filmes.</p>';
    }
});