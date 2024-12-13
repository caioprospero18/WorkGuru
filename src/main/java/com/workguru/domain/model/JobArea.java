package com.workguru.domain.model;

public enum JobArea {

	BACKEND("Backend"),
	FRONTEND("Frontend"),
	FULLSTACK("Fullstack"),
	SUPORTE_TECNICO("Suporte Técnico");
	
	private String jobArea;
	
	private JobArea(String jobArea) {
		this.jobArea = jobArea;
	}
	
	public String getStatus() {
		return jobArea;
	}
}
