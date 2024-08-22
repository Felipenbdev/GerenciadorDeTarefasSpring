package com.gerenciadordetarefas.gerenciador.repositories;

import com.gerenciadordetarefas.gerenciador.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
