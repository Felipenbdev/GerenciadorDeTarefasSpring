Gerenciador de Tarefas
Descrição

Este projeto está em implementação. É um Gerenciador de Tarefas usando Spring Boot para o back-end e HTML, CSS, JavaScript para o front-end.
Funcionalidades

-Criar, listar, buscar, atualizar e deletar tarefas.

Tecnologias

    Java 17
    Spring Boot
    Spring Data JPA
    H2 Database
    Postman para testes
    Front-end: HTML, CSS, JavaScript

Teste as APIs

    Listar Tarefas (GET): http://localhost:8080/tasks

    Criar Tarefa (POST): http://localhost:8080/tasks

    Body (JSON):

json

    {
        "title": "Nova Tarefa",
        "description": "Descrição",
        "completed": false
    }

    Buscar Tarefa (GET): http://localhost:8080/tasks/1

    Atualizar Tarefa (PUT): http://localhost:8080/tasks/1

Body (JSON):

json

    {    
        "title": "Atualizada",
        "description": "Descrição atualizada",
        "completed": true
    }

Deletar Tarefa (DELETE): http://localhost:8080/tasks/1
