package com.workguru.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.Job;

public interface JobRepository extends JpaRepository<Job, Long>{

	List<Job> findJobByEnterprise(Enterprise enterprise);


}
