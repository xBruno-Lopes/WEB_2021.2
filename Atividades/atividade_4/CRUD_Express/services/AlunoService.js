const AlunoModel = require('../models/AlunoModel')

let alunos = [//Alguns anulos adicionados hardcoded para testes
    {_id: 1, nome: 'Aluno 1', curso: 'ES', IRA: 7.7},
    {_id: 2, nome: 'Aluno 2', curso: 'CC', IRA: 7.8},
    {_id: 3, nome: 'Aluno 3', curso: 'DD', IRA: 7.6},
]

let _id = 4

class AlunoService{
    static register(data){
    let aluno = new AlunoModel(
    _id++,
    data.nome,
    data.curso,
    data.IRA);
    alunos.push(aluno);
    return aluno;
 }
    static list(){
        return alunos;
    }
    static update(_id,data){
        for(let e of alunos){ 
            if(e._id == _id){
                e.nome = data.nome
                e.curso = data.curso
                e.IRA = data.IRA
                return e
            }
        }
        return null
    }

    static delete(_id){
        for(let i=0;i<alunos.length;i++){
            if(alunos[i]._id == _id){
                alunos.splice(i,1)
                return true
            }
        }
        return false
    }
    static retrieve(_id){
        for(let i=0;i<alunos.length;i++){
            if(alunos[i]._id == _id){
                return alunos[i]
            }
        }
        return {}
    }
}

module.exports = AlunoService