const nodeFetch = require("node-fetch")

if (!globalThis.fetch) {
  globalThis.fetch = nodeFetch.default
  globalThis.Headers = nodeFetch.Headers
  globalThis.Request = nodeFetch.Request
  globalThis.Response = nodeFetch.Response
}
