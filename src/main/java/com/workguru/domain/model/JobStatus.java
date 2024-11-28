package com.workguru.domain.model;

public enum JobStatus {
	
	ABERTA("Aberta"),
	EM_ANDAMENTO("Em andamento"),
	FECHADA("Fechada");
	
	private String status;
	
	private JobStatus(String status) {
		this.status = status;
	}
	
	public String getStatus() {
		return status;
	}
}
