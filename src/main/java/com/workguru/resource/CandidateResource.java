package com.workguru.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.workguru.domain.model.Candidate;
import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.User;
import com.workguru.repository.CandidateRepository;
import com.workguru.repository.UserRepository;
import com.workguru.service.CandidateService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/candidates")
public class CandidateResource {

	@Autowired
	private CandidateRepository candidateRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CandidateService candidateService;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_SEARCH_USER') and hasAuthority('SCOPE_read')")
	public List<Candidate> list(){
		return userRepository.findAllCandidate();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
		public Candidate create(@Valid @RequestBody Candidate candidate, HttpServletResponse response) {
		return candidateService.save(candidate);
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_SEARCH_USER') and hasAuthority('SCOPE_read')")
	public ResponseEntity<Candidate> findById(@PathVariable Long id){
		Optional<Candidate> candidate = candidateRepository.findById(id);
		if(candidate.isPresent()) {
			return ResponseEntity.ok(candidate.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/apply/{id}")
	public void applyJob(@PathVariable Long jobId, @RequestBody Candidate candidate) {
		candidateService.applyJob(candidate, jobId);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_USER') and hasAuthority('SCOPE_write')")
	public void remove(@PathVariable Long id) {
		candidateRepository.deleteById(id);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_REGISTER_USER') and hasAuthority('SCOPE_write')")
	public ResponseEntity<Candidate> update(@PathVariable Long id, @Valid @RequestBody Candidate candidate) {
		Candidate candidateSaved = candidateService.update(id, candidate);
		return ResponseEntity.ok(candidateSaved);
	}
}
