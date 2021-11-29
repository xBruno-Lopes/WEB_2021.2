var express = require('express');
var router = express.Router();
var alunoService = require('../services/AlunoService');

router.get('/list', function (req, res, next) {
    return res.json(alunoService.list());
   });

router.post('/register', function (req, res, next) {
    const aluno = alunoService.register(req.body);
    return res.json(aluno);
   });

router.delete('/delete/:id', function (req, res, next) {
    const ok = alunoService.delete(req.params._id);
    if (ok) return res.json({ "sucess": true });
    else return res.json({ "sucess": false });
})

router.put('/update/:id', function (req, res, next) {
    const aluno = alunoService.update(req.params._id, req.body);
    return res.json(aluno);
})

router.get('/retrieve/:id', function (req, res, next) {
    const aluno = alunoService.retrieve(req.params._id);
    return res.json(aluno);
})

   module.exports = router;