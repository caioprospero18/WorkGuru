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

import com.workguru.domain.model.Enterprise;
import com.workguru.repository.EnterpriseRepository;
import com.workguru.repository.UserRepository;
import com.workguru.service.EnterpriseService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/enterprises")
public class EnterpriseResource {
	
	@Autowired
	private EnterpriseRepository enterpriseRepository;
	
	@Autowired
	private EnterpriseService enterpriseService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_SEARCH_USER') and hasAuthority('SCOPE_read')")
	public List<Enterprise> list(){
		return userRepository.findAllEnterprise();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
		public Enterprise create(@Valid @RequestBody Enterprise enterprise, HttpServletResponse response) {
		return enterpriseService.save(enterprise);
	}
	
	
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_SEARCH_USER') and hasAuthority('SCOPE_read')")
	public ResponseEntity<Enterprise> findById(@PathVariable Long id){
		Optional<Enterprise> enterprise = enterpriseRepository.findById(id);
		if(enterprise.isPresent()) {
			return ResponseEntity.ok(enterprise.get());
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_USER') and hasAuthority('SCOPE_write')")
	public void remove(@PathVariable Long id) {
		enterpriseRepository.deleteById(id);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_REGISTER_USER') and hasAuthority('SCOPE_write')")
	public ResponseEntity<Enterprise> update(@PathVariable Long id, @Valid @RequestBody Enterprise enterprise) {
		Enterprise userSaved = enterpriseService.update(id, enterprise);
		return ResponseEntity.ok(userSaved);
	}
}