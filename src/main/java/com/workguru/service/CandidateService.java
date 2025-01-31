package com.workguru.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.workguru.domain.model.Candidate;
import com.workguru.domain.model.Job;
import com.workguru.domain.model.Permission;
import com.workguru.repository.CandidateRepository;
import com.workguru.repository.JobRepository;
import com.workguru.repository.PermissionRepository;

@Service
public class CandidateService {

	@Autowired
	private CandidateRepository candidateRepository;

	
	@Autowired 
	PermissionRepository permissionRepository;
	
	@Autowired 
	JobRepository jobRepository;

	public Candidate save(Candidate candidate) {
		candidate.setPassword(new BCryptPasswordEncoder().encode(candidate.getPassword()));
		candidate.setPermission(addCommonUserPermissions());
		return candidateRepository.save(candidate);
	}
	
	public Candidate  applyJob(Candidate candidate, Long jobId){
		List<Job> jobs = candidate.getJob();
		jobs.add(jobRepository.findJobById(jobId).get());
		
		return candidateRepository.save(candidate);
	}
		
	
	public List<Permission> addCommonUserPermissions(){
		List<Permission> permissions = new ArrayList<>();
		permissions.add(permissionRepository.findById(1L).get());
		permissions.add(permissionRepository.findById(3L).get());
		permissions.add(permissionRepository.findById(6L).get());
		permissions.add(permissionRepository.findById(7L).get());
		return permissions;
	}
	
	public Candidate update(Long id, Candidate candidate) {
		Candidate candidateSaved = findCandidateById(id);
		BeanUtils.copyProperties(candidate, candidateSaved, "id");
		return candidateRepository.save(candidateSaved);
	}
	
	public Candidate findCandidateById(Long id) {
		Candidate peopleSaved = candidateRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return peopleSaved;
	}
	

}
