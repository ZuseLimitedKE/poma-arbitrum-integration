import Express from "express";
import router from "./routes";
import { ErrorMessages } from "./constants/messages";

const app: Express.Express = Express();
app.use("/tournament", router.tournament);

app.get("/test", (req, res) => {
    res.send("Reachable");
})

app.get("*", (req, res) => {
    res.status(400).json({error: ErrorMessages.ROUTE_NOT_EXISTS});
})
export default app;