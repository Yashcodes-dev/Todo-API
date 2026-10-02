import {app} from "./app.js"
import dotenv from "dotenv"
import { ConnectDB } from "./db/index.js"

dotenv.config({
    path: "./.env"
})

ConnectDB()
