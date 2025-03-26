import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const pessoas = {
    
};

app.get("/saudacao/:nome", (req: Request, res: Response) => {
    const nome = req.params.nome;
    return res.status(200).json({ message: `Olá, ${nome}` });
});

app.post("/usuarios", (req: Request, res: Response) => {
    const { nome, idade } = req.body;

    if (!nome || !idade) {
        return res.status(400).json({ error: "Faltam dados para criar usuáro." })
    }

    return res.status()
});

app.patch("pessoas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade } = req.body;

    const indice = pessoas
})



app.listen(3000, () => {
    console.log("Servidor Iniciado!")
})