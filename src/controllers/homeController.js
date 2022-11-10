const path = require('path');
const Contato = require(path.resolve(__dirname, '..', 'models', 'ContatoModel'));

exports.index = async(req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });
};

