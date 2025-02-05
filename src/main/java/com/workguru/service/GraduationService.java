package com.workguru.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.workguru.domain.model.Candidate;
import com.workguru.domain.model.Graduation;
import com.workguru.domain.model.Job;
import com.workguru.repository.CandidateRepository;
import com.workguru.repository.GraduationRepository;
import com.workguru.service.exception.NonExistentUserException;

@Service
public class GraduationService {

	@Autowired
	private GraduationRepository graduationRepository;
	
	@Autowired
	private CandidateRepository candidateRepository;
	
	public Graduation save(Graduation graduation) {
		Optional<Candidate> candidate = candidateRepository.findById(graduation.getCandidate().getId());
		if(!candidate.isPresent()) {
			throw new NonExistentUserException();
		}
		return graduationRepository.save(graduation);
	}
	
	public Graduation update(Long id, Graduation graduation) {
		Graduation graduationSaved = findJobById(id);
		BeanUtils.copyProperties(graduation, graduationSaved, "id");
		return graduationRepository.save(graduationSaved);
	}
	
	public Graduation findJobById(Long id) {
		Graduation graduationSaved = graduationRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return graduationSaved;
	}
}
