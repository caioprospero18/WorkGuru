package com.workguru.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Candidate;



public interface CandidateRepository extends JpaRepository<Candidate, Long>{
	
	@EntityGraph(attributePaths = {"graduations", "professionalHistories"})
	Optional<Candidate> findById(Long userId);

	
	
	
}
