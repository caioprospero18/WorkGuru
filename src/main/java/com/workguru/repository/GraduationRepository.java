package com.workguru.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Candidate;
import com.workguru.domain.model.Graduation;

public interface GraduationRepository extends JpaRepository <Graduation, Long>{
	
	Optional<Graduation> findById(Long id);
	List<Graduation> findAll();
}
