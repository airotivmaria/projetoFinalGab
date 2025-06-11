document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Resetar mensagens de erro
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });

    const usuario = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        senha: document.getElementById('senha').value
    };

    // Validação básica do frontend
    if (!usuario.nome || !usuario.email || !usuario.senha) {
        document.getElementById('mensagemSucesso').textContent = 'Preencha todos os campos!';
        document.getElementById('mensagemSucesso').style.color = 'red';
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();

        if (!response.ok) {
    
            if (data.errors) {
                data.errors.forEach(err => {
                    const errorField = document.getElementById(`${err.field}Error`);
                    if (errorField) {
                        errorField.textContent = err.message;
                    }
                });
            }
            throw new Error(data.message || 'Erro ao cadastrar usuário');
        }

        // Feedback visual melhorado
        document.getElementById('mensagemSucesso').textContent = 'Cadastro realizado com sucesso! Redirecionando...';
        document.getElementById('mensagemSucesso').style.color = 'green';
        document.getElementById('cadastroForm').reset();

    
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);

    } catch (error) {
        console.error('Erro: ', error);
        document.getElementById('mensagemSucesso').textContent = error.message;
        document.getElementById('mensagemSucesso').style.color = 'red';
    }
});