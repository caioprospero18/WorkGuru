package com.workguru.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.workguru.domain.model.Candidate;
import com.workguru.repository.CandidateRepository;
import com.workguru.repository.UserRepository;

@Service
public class CandidateService {

	@Autowired
	private CandidateRepository peopleRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public Candidate update(Long id, Candidate candidate) {
		Candidate candidateSaved = findCandidateById(id);
		BeanUtils.copyProperties(candidate, candidateSaved, "id");
		return peopleRepository.save(candidateSaved);
	}
	
	public Candidate findCandidateById(Long id) {
		Candidate peopleSaved = peopleRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return peopleSaved;
	}
	

}
