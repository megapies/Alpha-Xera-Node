class EchoConsoler{
  echo({
    message,
    source
  })
}

module.exports = {
  staticClass: EchoConsoler,
  consoler: new EchoConsoler()
}