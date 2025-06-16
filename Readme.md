# MovieList

<p align="center">
  <img src="./FrontEnd/views/foto2.png" alt="MovieList Logo" width="200"/>
</p>

<p align="center">
  <i>"O jeito fácil de colecionar e avaliar seus filmes!"</i>
</p>

## Sobre o Projeto

O MovieList é uma aplicação web pessoal desenvolvida para que você possa registrar e organizar os filmes que já assistiu. É uma ferramenta de controle pessoal que permite adicionar filmes, dar notas e escrever comentários sobre suas experiências cinematográficas, tudo em um ambiente privado.

## Funcionalidades

* **Cadastro e Login de Usuário**: Crie sua conta e faça login para ter acesso à sua coleção pessoal de filmes.
* **Adicionar Filmes**: Registre novos filmes em sua coleção, incluindo título, ano de lançamento, gênero, sua avaliação (estrelas) e comentários pessoais.
* **Visualizar Filmes**: Veja todos os filmes que você adicionou em uma lista organizada.
* **Avaliação por Estrelas**: Atribua uma nota aos filmes de forma intuitiva, utilizando um sistema de estrelas.
* **Gerenciamento Pessoal**: A aplicação é voltada para controle individual, garantindo que apenas você visualize seus registros.

## Tecnologias Utilizadas

**Frontend:**

* **HTML5**: Estrutura das páginas web.
* **CSS3**: Estilização e design responsivo da interface.
* **JavaScript**: Lógica de interação com o usuário, requisições ao backend e manipulação do DOM.
* **Font Awesome**: Ícones utilizados na interface para melhorar a experiência do usuário.
* **Google Fonts (Poppins)**: Fonte utilizada para um design moderno e legível.

**Backend:**

* **Node.js**: Ambiente de execução JavaScript para o servidor.
* **Express.js**: Framework web para Node.js, utilizado para construir a API RESTful.
* **Mongoose**: ODM (Object Data Modeling) para Node.js, facilitando a interação com o MongoDB.
* **MongoDB Atlas**: Banco de dados NoSQL baseado em nuvem para armazenar os dados dos usuários e filmes.
* **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.
* **Bcrypt**: Biblioteca para hash de senhas, garantindo a segurança dos dados dos usuários.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* Node.js (versão LTS recomendada)
* npm (gerenciador de pacotes do Node.js) ou Yarn

### Configuração do Backend

1.  **Navegue até a pasta `Backend`:**
    ```bash
    cd projetoFinalGab-master/Backend
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ou
    yarn install
    ```
3.  **Configure a Conexão com o MongoDB Atlas:**
    * No arquivo `server.js`, a string de conexão com o MongoDB Atlas já está presente:
        ```javascript
        mongoose.connect(
          "mongodb+srv://mariavitoria6019:Rn492zDY2GZuAfEF@movielist.drrr4an.mongodb.net/movielist?retryWrites=true&w=majority"
        )
        ```
    * Se você for usar seu próprio cluster, substitua essa string pela sua.
4.  **Inicie o servidor Backend:**
    ```bash
    node server.js
    ```
    O servidor estará rodando na porta `3000`.

### Configuração do Frontend

1.  **Navegue até a pasta `FrontEnd`:**
    ```bash
    cd projetoFinalGab-master/FrontEnd
    ```
2.  **Abra o arquivo `index.html` no seu navegador.**
    Você pode simplesmente clicar duas vezes no arquivo `index.html` ou arrastá-lo para a janela do navegador.

### Acessando a Aplicação

Com o backend rodando e o `index.html` aberto no navegador, você poderá:

1.  **Registrar-se**: Clique em "Ainda não tenho cadastro" na tela de login, ou acesse `cadastro.html` diretamente.
2.  **Fazer Login**: Utilize suas credenciais para acessar a dashboard.
3.  **Adicionar Filmes**: No menu lateral, clique em "Adicionar Filme" para registrar seus títulos assistidos.
4.  **Visualizar Meus Filmes**: Na página inicial, seus filmes serão listados.

## Estrutura do Projeto

```bash
    projetoFinalGab-master/
    ├── Backend/
    │   └── server.js           - Lógica do servidor, API, conexão com DB
    └── FrontEnd/
    ├── scr/
    │   └── js/
    │       ├── addFilme.js         - Lógica para adicionar filmes
    │       ├── cadastro.js         - Lógica para o cadastro de usuários
    │       ├── login.js            - Lógica para o login de usuários
    │       └── main.js             - Lógica para carregar e exibir filmes
    └── views/
    ├── adicionarFilme.html     - Página para adicionar um novo filme
    ├── cadastro.css            - Estilos para as páginas de cadastro e login
    ├── cadastro.html           - Página de cadastro de usuário
    ├── foto2.png               - Ícone do projeto
    ├── index.css               - Estilos para a página principal # (dashboard)
    ├── index.html              - Página principal/dashboard
    ├── login.html              - Página de login de usuário
    ├── meusFilmes.html         - Página para exibir os filmes do usuário
    └── styleFilme.css          - Estilos específicos para a página de adicionar filme
```
## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum problema, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

**Desenvolvido por**: Maria Vitória, José Francisco e Pedro Rezende