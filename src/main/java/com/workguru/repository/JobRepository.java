package com.workguru.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Vaga;

public interface JobRepository extends JpaRepository<Vaga, Long>{

}
