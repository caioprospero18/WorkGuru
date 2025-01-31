package com.workguru.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.Job;
import com.workguru.repository.job.JobRepositoryQuery;

public interface JobRepository extends JpaRepository<Job, Long>, JobRepositoryQuery{

	List<Job> findJobByEnterprise(Enterprise enterprise);
	
	Optional<Job> findJobById(Long id);


}
