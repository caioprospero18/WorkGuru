package com.workguru.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.Job;
import com.workguru.repository.EnterpriseRepository;
import com.workguru.repository.JobRepository;
import com.workguru.repository.filter.JobFilter;
import com.workguru.service.exception.NonExistentUserException;


@Service
public class JobService {

	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	private EnterpriseRepository enterpriseRepository;
	
	
	
	public Job save(Job job) {
		Optional<Enterprise> enterprise = enterpriseRepository.findById(job.getEnterprise().getId());
		if(!enterprise.isPresent()) {
			throw new NonExistentUserException();
		}
		return jobRepository.save(job);
	}
	
	public Job update(Long id, Job job) {
		Job jobSaved = findJobById(id);
		BeanUtils.copyProperties(job, jobSaved, "id");
		return jobRepository.save(jobSaved);	
	}
	
	public Job findJobById(Long id) {
		Job jobSaved = jobRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return jobSaved;
	}
	
	public List<Job> findJobsByEnterprise(Enterprise enterprise) {		
		return  jobRepository.findJobByEnterprise(enterprise);
	}

	public List<Job> search(JobFilter jobFilter) {
		return jobRepository.filter(jobFilter, Sort.by("publishDate").descending());
	}
	
	
	
}
