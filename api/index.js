const app = require("express")()
const Whereabouts = require("@cicada-lang/cicada-whereabouts")

app.get("/hi", (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate")
  res.end("Hello world!")
})

app.get("/run", (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate")
  res.end("Whereabouts!")
})

module.exports = app
