# Task-Tracker

### Uma mini projeto back-end para rastrear suas tarefas diárias.

### Arquitetura do projeto:
!["Arch API"](./docs/arch.png)

### Tecnologias Usadas:
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

### Instalar projeto

Clonar repositório:
```bash
git clone https://github.com/vicenteprogammer/task-tracker.git
```
Instalar dependências:
```bash
npm i
```
Criar variáveis ambientes:
```bash
PORT=3000
```

Executar todo o código
```bash
npm start
```
### Endpoints

Registrar task:
```
POST -> /register
```

Listar todas as tasks:
```
GET -> /listAll
```

Listar tasks concluídas:
```
GET -> /listdone
```

Atualizar status da task por id:
```
PUT -> /updateStatsTask
```

Deletar tasks:
```
DELETE -> /delete
```


### Projeto finalizado, não foi uma coisa tão complexa, mas consegui relembrar e praticar os estudos de back-end.😅
