document.querySelector('.formulario-filme').addEventListener('submit', async function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const anoLancamento = document.getElementById('ano').value;
    const generoSelecionado = document.querySelector('.genero.selecionado')?.textContent || '';
    const avaliacao = document.querySelectorAll('.estrelas span.selecionado').length;
    const descricao = document.getElementById('comentarios').value;

    const filme = {
        titulo,
        descricao,
        anoLancamento: parseInt(anoLancamento),
        generoDoFilme: generoSelecionado,
        avaliacao
    };

    // Adicione verificação de resposta.ok
try {
    const resposta = await fetch('http://localhost:3000/adicionarfilme', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    });

    if (!resposta.ok) {
        const erro = await resposta.json();
        throw new Error(erro.message || 'Erro ao salvar filme');
    }

    const resultado = await resposta.json();
    alert("Filme salvo com sucesso!");
    window.location.href = 'index.html'; // Redireciona após sucesso
} catch (erro) {
    console.error("Erro ao salvar o filme:", erro);
    alert(erro.message || "Erro ao salvar o filme");
}
});

// Selecionar gênero
document.querySelectorAll('.genero').forEach(genero => {
    genero.addEventListener('click', () => {
        document.querySelectorAll('.genero').forEach(g => g.classList.remove('selecionado'));
        genero.classList.add('selecionado');
    });
});

// Avaliação por estrelas
document.querySelectorAll('.estrelas span').forEach((estrela, index, array) => {
    estrela.addEventListener('click', () => {
        array.forEach((s, i) => s.classList.toggle('selecionado', i <= index));
    });
});

document.querySelector('.cancelar').addEventListener('click', () => {
    if (confirm('Deseja cancelar a adição do filme?')) {
        window.location.href = 'index.html';
    }
});

