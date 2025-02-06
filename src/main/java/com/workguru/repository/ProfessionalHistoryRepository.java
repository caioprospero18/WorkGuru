package com.workguru.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.ProfessionalHistory;

public interface ProfessionalHistoryRepository extends JpaRepository <ProfessionalHistory, Long>{

	Optional<ProfessionalHistory> findById(Long id);
	List<ProfessionalHistory> findAll();
}
