package com.workguru.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.Job;

public interface EnterpriseRepository extends JpaRepository<Enterprise, Long>{

	Optional<Enterprise> findByName(String name);

	Optional<Enterprise> findById(Long id);

}
