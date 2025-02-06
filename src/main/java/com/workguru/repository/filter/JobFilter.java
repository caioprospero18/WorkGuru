package com.workguru.repository.filter;

import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.JobArea;
import com.workguru.domain.model.Level;
import com.workguru.domain.model.Model;
import com.workguru.domain.model.Salary;

import jakarta.persistence.Enumerated;

public class JobFilter {
	private String title;
	@Enumerated
	private Level level;
	@Enumerated
	private Model model;
	@Enumerated
	private Salary salary;
	@Enumerated
	private JobArea jobArea;
	private String location;
	private Enterprise enterprise;
	
	public Level getLevel() {
		return level;
	}
	public void setLevel(Level level) {
		this.level = level;
	}
	public Model getModel() {
		return model;
	}
	public void setModel(Model model) {
		this.model = model;
	}
	public Salary getSalary() {
		return salary;
	}
	public void setSalary(Salary salary) {
		this.salary = salary;
	}
	public JobArea getJobArea() {
		return jobArea;
	}
	public void setJobArea(JobArea jobArea) {
		this.jobArea = jobArea;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Enterprise getEnterprise() {
		return enterprise;
	}
	public void setEnterprise(Enterprise enterprise) {
		this.enterprise = enterprise;
	}
	
	

}
