const express = require("express")
const asyncHandler = require("express-async-handler")
const { Loader, Mod, Errors } = require("@cicada-lang/cicada-whereabouts")

const app = express()

app.use(express.text())

app.post(
  "/run",
  asyncHandler(async (req, res) => {
    const text = req.body
    const url = new URL("whereabouts-server://")
    const loader = new Loader()
    loader.fetcher.register("whereabouts-server", (url) => "")
    const mod = await loader.load(url, { text })
    const outputs = Array.from(mod.outputs.values())
    res.setHeader("Content-Type", "application/jsonl")
    res.send(outputs.join("\n"))
  }),
)

module.exports = app
