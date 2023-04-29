const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')

const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router

   .get('/pessoas', PessoaController.pegaTodasAsPessoas)

   .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)

   .get('/pessoas/:id', PessoaController.pegaPessoa)

   .get('/pessoas/:estudanteId/matricula/', PessoaController.pegaMatriculas)

   .post('/pessoas/matricula/:turmaId/confirmada', MatriculaController.pegaMatriculasPorTurma)

   .get('/pessoas/:estudanteId/matriculas/matriculaId', MatriculaController.pegaUmaMatricula)

   .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)

   .post('/pessoas', PessoaController.criarPessoa)

   .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)

   .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)

   .post('/pessoas/:estutanteId/Matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)

   .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)

   .put('/pessoas/:id', PessoaController.atualizaPessoa)

   .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)

   .delete('/pessoas/:id', PessoaController.apagaPessoa)

   .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)

module.exports = router