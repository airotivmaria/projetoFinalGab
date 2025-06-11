async function fazerLogin(email, senha) {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.erro || 'Erro ao fazer login');
        }

        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        return data;
    } catch (error) {
        console.error('Erro no login:', error);
        throw error;
    }
};

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  
  try {
    const { usuario } = await fazerLogin(email, senha); // Desestruturação
    
    // Armazena os dados do usuário
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    // Feedback visual
    document.getElementById('mensagemSucesso').textContent = `Bem-vindo, ${usuario.nome}!`;
    document.getElementById('mensagemSucesso').style.color = 'green';
    
    setTimeout(() => {
            window.location.href = 'index.html';
    }, 3000);
    
  } catch (error) {
    // Feedback de erro mais elaborado
    const feedbackEl = document.getElementById('mensagemSucesso');
    feedbackEl.textContent = error.message;
    feedbackEl.style.color = 'red';
    
    // Limpa o campo de senha
    document.getElementById('senha').value = '';
    document.getElementById('senha').focus();
  }
});