package com.gerenciadordetarefas.gerenciador.config;

import com.gerenciadordetarefas.gerenciador.entities.Task;
import com.gerenciadordetarefas.gerenciador.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;
@Configuration
@Profile("test")
public class Test implements CommandLineRunner {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public void run(String... args) throws Exception {
        Task task1 = new Task(null, "Estudar Java", "Revisar conceitos de OOP", false);
        Task task2 = new Task(null, "Desenvolver API", "Implementar endpoints para CRUD", false);
        Task task3 = new Task(null, "Testar aplicação", "Escrever testes unitários", false);
        Task task4 = new Task(null, "Deploy no servidor", "Configurar ambiente de produção", false);

        taskRepository.saveAll(Arrays.asList(task1, task2, task3, task4));
    }
}
