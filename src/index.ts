
import express ,{Request, Response} from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Servidor Node + TypeScript rodando 🚀" });
});
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
});