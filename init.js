import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const handleListening = () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
}

app.listen(process.env.PORT, handleListening);