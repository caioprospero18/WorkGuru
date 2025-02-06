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

import com.workguru.domain.model.ProfessionalHistory;
import com.workguru.repository.ProfessionalHistoryRepository;
import com.workguru.service.ProfessionalHistoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/professional_histories")
public class ProfessionalHistoryResource {
	@Autowired
	private ProfessionalHistoryRepository professionalHistoryRepository;
	
	@Autowired
	private ProfessionalHistoryService professionalHistoryService;

	@GetMapping
	public List<ProfessionalHistory> list(){
		return professionalHistoryRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ProfessionalHistory> findById(@PathVariable Long id){
		Optional<ProfessionalHistory> professionalHistory = professionalHistoryRepository.findById(id);
		if(professionalHistory.isPresent()) {
			return ResponseEntity.ok(professionalHistory.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ProfessionalHistory create(@Valid @RequestBody ProfessionalHistory professionalHistory) {
		return professionalHistoryService.save(professionalHistory);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		professionalHistoryRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<ProfessionalHistory> update(@PathVariable Long id, @Valid @RequestBody ProfessionalHistory professionalHistory) {
		ProfessionalHistory professionalHistorySaved = professionalHistoryService.update(id, professionalHistory);
		return ResponseEntity.ok(professionalHistorySaved);
	}

}
