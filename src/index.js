import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import './database/mongoose'
import "dotenv/config"

import {ModelRouter as potatoRouter} from "./router/potatoRouter"

const port = process.env.PORT || 4000

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin:"*"}))

app.use('/api/potatos', potatoRouter)

console.log("PORT = ", port)

app.listen(port, () => console.log(`Welcome aboard captain, all systems online!`))
