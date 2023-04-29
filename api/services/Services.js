const database = require('../models')

class Services {
   constructor(nomeDoModelo) {
      this.nomeDoModelo = nomeDoModelo
   }

   async pegaTodosOsRegistros(where = {}) {
      return database[this.nomeDoModelo].findAll({ where: { ...where } })
   }

   async pegaUmRegistro(where = {}) {
      return database[this.nomeDoModelo].findOne({ where: { ...where } })
   }

   async criaRegistro(dados) {
      return database[this.nomeDoModelo].create(dados)
   }

   async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
      return database[this.nomeDoModelo]
         .update(dadosAtualizados, { where: { id: id } }, transacao)
   }

   async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
      return database[this.nomeDomodelo]
         .update(dadosAtualizados, { where: { ...where } }, transacao)
   }

   async apagaRegistro(id) {
      return database[this.nomeDoModelo]
         .destroy({ where:{ id: id } } )
   }

   async restauraRegistro(id) {
      return database[this.nomeDoModelo].restore({where: { id: id}})
   }

   async colnsultaRegistroApagado(id) {
      return database[this.nomeDoModelo]
      .findOne({paranoide: false, where: { id: Number(id)}})
   }

   async encontraEContaRegistros( where = {}, agregadores) {
      return database[this.nomeDoModelo]
      .findAndCountAll({ where: { ...Where }, ...agregadores})
   }
}

module.exports = Services