import {app} from "./app.js"
import dotenv from "dotenv"
import { ConnectDB } from "./db/index.js"

dotenv.config({
    path: "./.env"
})

ConnectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port: localhost/${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error)
    })