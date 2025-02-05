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
import com.workguru.domain.model.Job;
import com.workguru.repository.JobRepository;
import com.workguru.repository.filter.JobFilter;
import com.workguru.service.JobService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/jobs")
public class JobResource {

	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	private JobService jobService;	
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_SEARCH_JOB') and hasAuthority('SCOPE_read')")
	public List<Job> search(JobFilter jobFilter){
		return jobService.search(jobFilter);
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_SEARCH_JOB') and hasAuthority('SCOPE_read')")
	public ResponseEntity<Job> findById(@PathVariable Long id) {
		Optional<Job> job = jobRepository.findById(id);
		if(job.isPresent()) {
			return ResponseEntity.ok(job.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/jobs/{email}")
	@PreAuthorize("hasAuthority('ROLE_SEARCH_ACTIVITY') and hasAuthority('SCOPE_read')")
	public ResponseEntity<List<Job>> findByEnterprise(@PathVariable Enterprise enterprise){
		List<Job> jobs = jobService.findJobsByEnterprise(enterprise);
		if(!jobs.isEmpty()) {
			return ResponseEntity.ok(jobs);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	@PreAuthorize("hasAuthority('ROLE_REGISTER_JOB') and hasAuthority('SCOPE_write')")
	public Job create(@Valid @RequestBody Job job) {
		return jobService.save(job);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_JOB') and hasAuthority('SCOPE_write')")
	public void delete(@PathVariable Long id) {
		jobRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_REGISTER_JOB') and hasAuthority('SCOPE_write')")
	public ResponseEntity<Job> update(@PathVariable Long id, @Valid @RequestBody Job job) {
		Job jobSaved = jobService.update(id, job);
		return ResponseEntity.ok(jobSaved);
	}
}