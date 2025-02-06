package com.workguru.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.workguru.domain.model.Candidate;
import com.workguru.domain.model.ProfessionalHistory;
import com.workguru.repository.CandidateRepository;
import com.workguru.repository.ProfessionalHistoryRepository;
import com.workguru.service.exception.NonExistentUserException;

@Service
public class ProfessionalHistoryService {
	
	@Autowired
	private ProfessionalHistoryRepository professionalHistoryRepository;
	
	@Autowired
	private CandidateRepository candidateRepository;
	
	public ProfessionalHistory save(ProfessionalHistory professionalHistory) {
		Optional<Candidate> candidate = candidateRepository.findById(professionalHistory.getCandidate().getId());
		if(!candidate.isPresent()) {
			throw new NonExistentUserException();
		}
		return professionalHistoryRepository.save(professionalHistory);
	}
	
	public ProfessionalHistory update(Long id, ProfessionalHistory professionalHistory) {
		ProfessionalHistory professionalHistorySaved = findJobById(id);
		BeanUtils.copyProperties(professionalHistory, professionalHistorySaved, "id");
		return professionalHistoryRepository.save(professionalHistorySaved);
	}
	
	public ProfessionalHistory findJobById(Long id) {
		ProfessionalHistory professionalHistorySaved = professionalHistoryRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return professionalHistorySaved;
	}

}
