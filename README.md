Gerenciador de Tarefas
Descrição

Este é o meu primeiro projeto independente usando Spring Boot, onde desenvolvi um Gerenciador de Tarefas. O objetivo deste projeto é praticar e aprofundar meus conhecimentos em desenvolvimento backend, especialmente utilizando o framework Spring.

O projeto é simples, mas aborda conceitos importantes, como criação de APIs RESTful, operações CRUD, e mapeamento de entidades com JPA.
Funcionalidades

    Criar Tarefas: Adiciona novas tarefas ao sistema com um título, descrição e status de conclusão.
    Listar Tarefas: Retorna uma lista com todas as tarefas cadastradas.
    Buscar Tarefas por ID: Recupera os detalhes de uma tarefa específica a partir do seu ID.
    Atualizar Tarefas: Permite a modificação dos dados de uma tarefa existente.
    Deletar Tarefas: Remove uma tarefa do sistema usando seu ID.

Tecnologias Utilizadas

    Java 17
    Spring Boot
    Spring Data JPA (Hibernate)
    H2 Database (para testes e desenvolvimento)
    Postman (para testes das APIs)

Como Executar o Projeto

    Clone o Repositório

    bash

git clone https://github.com/Felipenbdev/GerenciadorDeTarefasSpring.git

Abra o Projeto em sua IDE

Recomendo o uso do IntelliJ IDEA ou Eclipse.

Execute a Aplicação

    No IntelliJ IDEA, clique em "Run" > "Run 'Application'".
    O projeto será executado no servidor embutido do Spring Boot, geralmente acessível em http://localhost:8080.

Testando as APIs

Você pode usar o Postman para testar as APIs. Aqui estão alguns exemplos:

    Listar Tarefas (GET): http://localhost:8080/tasks
    Criar Nova Tarefa (POST): http://localhost:8080/tasks
        Body (JSON):

        json

    {
        "title": "Nova Tarefa",
        "description": "Descrição da tarefa",
        "completed": false
    }

Buscar Tarefa por ID (GET): http://localhost:8080/tasks/1
Atualizar Tarefa (PUT): http://localhost:8080/tasks/1

    Body (JSON):

    json

            {
                "title": "Tarefa Atualizada",
                "description": "Descrição atualizada",
                "completed": true
            }

        Deletar Tarefa (DELETE): http://localhost:8080/tasks/1

Aprendizados

Durante o desenvolvimento deste projeto, aprendi a estruturar uma aplicação Spring Boot, mapeamento de entidades com JPA, criação de APIs RESTful, e boas práticas de desenvolvimento backend. Além disso, ganhei experiência prática com o uso do Postman para testar e validar endpoints.
Próximos Passos
