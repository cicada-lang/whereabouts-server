const app = require("express")()

app.get("*", (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate")
  res.end("Hello world!")
})

module.exports = app
