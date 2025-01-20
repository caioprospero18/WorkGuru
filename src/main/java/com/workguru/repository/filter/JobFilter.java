package com.workguru.repository.filter;

import com.workguru.domain.model.Level;
import com.workguru.domain.model.Model;
import com.workguru.domain.model.Salary;

import jakarta.persistence.Enumerated;

public class JobFilter {
	@Enumerated
	private Level level;
	@Enumerated
	private Model model;
	@Enumerated
	private Salary salary;
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

}
