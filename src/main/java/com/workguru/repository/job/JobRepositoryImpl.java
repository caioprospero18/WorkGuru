package com.workguru.repository.job;

import java.util.ArrayList;
import java.util.List;

import com.workguru.domain.model.Job;
import com.workguru.repository.filter.JobFilter;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class JobRepositoryImpl implements JobRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<Job> filter(JobFilter jobFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Job> criteria = builder.createQuery(Job.class);
		Root<Job> root = criteria.from(Job.class);
		
		Predicate[] predicates = createConstraints(jobFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Job> query = manager.createQuery(criteria);
		return query.getResultList();
	}

	private Predicate[] createConstraints(JobFilter jobFilter, CriteriaBuilder builder, Root<Job> root) {
		List<Predicate> predicates = new ArrayList<>();
		
		if(jobFilter.getTitle() != null) {
			predicates.add(builder.equal(
					root.get("title"), jobFilter.getTitle()));
		}
		if(jobFilter.getLevel() != null) {
			predicates.add(builder.equal(
					root.get("level"), jobFilter.getLevel()));
		}
		
		if(jobFilter.getModel() != null) {
			predicates.add(builder.equal(
					root.get("model"), jobFilter.getModel()));
		}
		
		if(jobFilter.getSalary() != null) {
			predicates.add(builder.equal(
					root.get("salary"), jobFilter.getSalary()));
		}
		if(jobFilter.getJobArea() != null) {
			predicates.add(builder.equal(
					root.get("jobArea"), jobFilter.getJobArea()));
		}
		/*if(jobFilter.getEnterprise().getName() != null) {
			predicates.add(builder.equal(
					root.get("enterprise"), jobFilter.getEnterprise().getName()));
		}*/
		if (jobFilter.getLocation() != null) {
			predicates.add(
					builder.lessThanOrEqualTo(root.get("location"), jobFilter.getLocation()));
		}
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}

}


