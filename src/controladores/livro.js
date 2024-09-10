function getLivros(req, res) {
  try {
      res.send('Olá mundo do Brasil!')
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

module.exports = {
  getLivros
}