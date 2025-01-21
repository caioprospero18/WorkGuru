package com.workguru.repository.job;

import java.util.List;

import com.workguru.domain.model.Job;
import com.workguru.repository.filter.JobFilter;

public interface JobRepositoryQuery {

	public List<Job> filter(JobFilter jobFilter);
}
