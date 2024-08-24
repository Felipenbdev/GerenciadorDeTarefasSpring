package com.gerenciadordetarefas.gerenciador.service;

import com.gerenciadordetarefas.gerenciador.entities.Task;
import com.gerenciadordetarefas.gerenciador.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    public List<Task> findAll() {
        return repository.findAll();
    }
    public Task findById(Long id){
        Optional<Task> task = repository.findById(id);
        return task.orElseThrow(() -> new RuntimeException("Task not found"));
    }
    public Task insert(Task task){
        return repository.save(task);
    }
    public void deleteById(Long id){
        repository.deleteById(id);
    }
    public Task updateAll(Long id, Task obj) {
        Task entity = repository.getReferenceById(id);
        updateData(entity,obj);
        return repository.save(entity);
    }
    public Task updateStatus(Long id, Task obj) {
        Task entity = repository.getReferenceById(id);
        entity.setCompleted(obj.isCompleted());
        return repository.save(entity);
    }
    public Task uptadeTitleAndDesc(Long id, Task obj) {
        Task entity = repository.getReferenceById(id);
        entity.setTitle(obj.getTitle());
        entity.setDescription(obj.getDescription());
        return repository.save(entity);
    }
    private void updateData(Task entity, Task obj) {
        entity.setTitle(obj.getTitle());
        entity.setDescription(obj.getDescription());
        entity.setCompleted(obj.isCompleted());
    }
}
