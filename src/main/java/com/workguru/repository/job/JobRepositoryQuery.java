package com.workguru.repository.job;

import java.util.List;

import org.springframework.data.domain.Sort;

import com.workguru.domain.model.Job;
import com.workguru.repository.filter.JobFilter;

public interface JobRepositoryQuery {

	public List<Job> filter(JobFilter jobFilter, Sort sort);
}
