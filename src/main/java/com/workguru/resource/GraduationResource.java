package com.workguru.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.workguru.domain.model.Graduation;
import com.workguru.repository.GraduationRepository;
import com.workguru.service.GraduationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/graduations")
public class GraduationResource {
	
	@Autowired
	private GraduationRepository graduationRepository;
	
	@Autowired
	private GraduationService graduationService;

	@GetMapping
	public List<Graduation> list(){
		return graduationRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Graduation> findById(@PathVariable Long id){
		Optional<Graduation> graduation = graduationRepository.findById(id);
		if(graduation.isPresent()) {
			return ResponseEntity.ok(graduation.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Graduation create(@Valid @RequestBody Graduation graduation) {
		return graduationService.save(graduation);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		graduationRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Graduation> update(@PathVariable Long id, @Valid @RequestBody Graduation graduation) {
		Graduation graduationSaved = graduationService.update(id, graduation);
		return ResponseEntity.ok(graduationSaved);
	}
}
