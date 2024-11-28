package com.workguru.domain.model;

public enum CandidateStatus {

	TRABALHANDO("Trabalhando"),
	TRABALHANDO_MAS_ACEITO_OFERTAS("Trabalhando mas aceito ofertas"),
	SEM_EMPREGO("Sem emprego");
	
	private String candidateStatus;
	
	private CandidateStatus(String candidateStatus) {
		this.candidateStatus = candidateStatus;
	}
	
	public String getCandidateStatus() {
		return candidateStatus;
	}
}
