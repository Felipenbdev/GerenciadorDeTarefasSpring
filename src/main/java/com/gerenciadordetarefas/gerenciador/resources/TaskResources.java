package com.gerenciadordetarefas.gerenciador.resources;

import com.gerenciadordetarefas.gerenciador.entities.Task;
import com.gerenciadordetarefas.gerenciador.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/tasks")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class TaskResources {
    @Autowired
    private TaskService service;

    @GetMapping
    public ResponseEntity<List<Task>> findAll(){
        List<Task> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Task> findById(@PathVariable Long id){
        Task obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }
    @PostMapping
    public ResponseEntity<Task> insert(@RequestBody Task task){
        Task obj = service.insert(task);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(task.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/updateAll/{id}")
    public ResponseEntity<Task> updateAll(@PathVariable Long id, @RequestBody Task task){
        Task obj = service.updateAll(id, task);
        return ResponseEntity.ok().body(obj);
    }
    @PutMapping(value = "/status/{id}")
    public ResponseEntity<Task> updateStatus(@PathVariable Long id, @RequestBody Task task){
        Task obj = service.updateStatus(id, task);
        return ResponseEntity.ok().body(obj);
    }
}
