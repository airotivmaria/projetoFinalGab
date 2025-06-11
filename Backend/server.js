import express from "express";
import mongoose from "mongoose";

//instala o cors que nem instalou o express
import cors from "cors";
app.use(cors())
//Cadastro do filme
mongoose.connect("mongodb+srv://mariavitoria6019:Rn492zDY2GZuAfEF@movielist.drrr4an.mongodb.net/?retryWrites=true&w=majority&appName=MovieList");
const app = express();
app.use(express.json());

const Filme = mongoose.model('Filme', {
    titulo: String,
    descricao: String,
    anoLancamento: Number,
    generoDoFilme: String,
    avaliacao: Number
});

app.post('/adicionarfilme', async (req,res) => {
    const novoFilme = new Filme({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        anoLancamento: req.body.anoLancamento,
        generoDoFilme: req.body.generoDoFilme,
        avaliacao: req.body.avaliacao
    })
    
    await novoFilme.save();
    return res.send(novoFilme);
})

app.get('/filmes', async (req, res) => {
    const filmes = await Filme.find();
    return res.send(filmes);
})

app.delete('/:id', async (req, res) => {
    const filme = await Filme.findByIdAndDelete(req.params.id);
    return res.send(filme);
})

app.put('/:id', async (req, res) => {
    const editarFilme = await Filme.findByIdAndUpdate(req.params.id, {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        anoLancamento: req.body.anoLancamento,
        generoDoFilme: req.body.generoDoFilme,
        avaliacao: req.body.avaliacao
    });

    return res.send(editarFilme);
})


//Cadastro usuario

const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    senha: String
});

app.post('/cadastro', async (req, res) => {
    const cadastroUsuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    })
    await cadastroUsuario.save();
    return res.send(cadastroUsuario);
});

app.get('/usuarios', async (req, res) => {
    const usuario = await Usuario.find();
    res.send(usuario);
})


app.listen(3000);




// 1) tipo de rota / metodo http
// 2) endereço