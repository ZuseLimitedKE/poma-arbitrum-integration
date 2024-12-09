import "dotenv/config";
import { MyError } from "./constants/myError";
import { ErrorMessages } from "./constants/messages";
import app from "./app";

if(!process.env.PORT) {
    console.log("Set Server Port In Env");
    throw new MyError(ErrorMessages.SERVER_CONFIG_ERROR)
}

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}...`);
})