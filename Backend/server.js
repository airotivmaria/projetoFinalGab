import express from "express";
import mongoose from "mongoose";
//instala o cors que nem instalou o express
import cors from "cors";
import bcrypt from "bcrypt";

//Cadastro do filme
mongoose.connect("mongodb+srv://mariavitoria6019:Rn492zDY2GZuAfEF@movielist.drrr4an.mongodb.net/?retryWrites=true&w=majority&appName=MovieList");
const app = express();
app.use(express.json());
app.use(cors());

const Filme = mongoose.model('Filme', {
    titulo: String,
    descricao: String,
    anoLancamento: Number,
    generoDoFilme: String,
    avaliacao: Number,
    dono: String
});

app.post('/adicionarfilme', async (req, res) => {
    try {
        const { titulo, descricao, anoLancamento, generoDoFilme, avaliacao, usuario } = req.body;

        const novoFilme = new Filme({
            titulo,
            descricao,
            anoLancamento,
            generoDoFilme,
            avaliacao,
            dono: usuario.email
        });

        await novoFilme.save();
        res.status(201).send(novoFilme);
    } catch (erro) {
        console.error(erro);
        res.status(500).send({ erro: 'Erro ao adicionar o filme' });
    }
});

app.get('/filmes', async (req, res) => {
    const email = req.query.email;

    if (!email){
        return res.status(400).json({ erro: 'Email do usuário é obrigatório' });
    }
    const filmes = await Filme.find({dono: email});
    return res.send(filmes);
})

app.delete('/:id', async (req, res) => {
    const filme = await Filme.findByIdAndDelete(req.params.id);
    return res.send(filme);
})

app.put('/:id', async (req, res) => {
    const editarFilme = await Filme.findByIdAndUpdate(req.params.id, {
        titulo, descricao, anoLancamento, generoDoFilme, avaliacao, dono } = req.body
    );

    return res.send(editarFilme);
})


//Cadastro usuario

const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    senha: String
});

app.post('/cadastro', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        
        // Verifica se usuário já existe
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ erro: 'E-mail já cadastrado' });
        }

        // Cria o hash CORRETAMENTE
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt); // Usa a senha do req.body

        const cadastroUsuario = new Usuario({
            nome,
            email,
            senha: senhaHash // Armazena o hash
        });

        await cadastroUsuario.save();
        
        // Retorna sem a senha
        res.status(201).json({
            usuario: {
                id: cadastroUsuario.id,
                nome: cadastroUsuario.nome,
                email: cadastroUsuario.email
            }
        });
        
    } catch (error) {
        console.error('Erro no cadastro:', error);
        res.status(500).json({ erro: 'Erro interno no servidor' });
    }
});

app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(401).json({ erro: 'E-mail ou senha incorretos' });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ erro: "E-mail ou senha incorretos" });
        }

        res.json({
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ erro: 'Erro interno no servidor' });
    }
});

app.get('/usuarios', async (req, res) => {
    const usuario = await Usuario.find();
    res.send(usuario);
})

app.listen(3000);




// 1) tipo de rota / metodo http
// 2) endereço