import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";
const wss = new WebSocketServer({port:8080})

wss.on("connection",async function connnection(ws, req) {
    ws.send("websocket connected")

    ws.on("message", async function message(data) {
        ws.send("message recieved....")
    })
})