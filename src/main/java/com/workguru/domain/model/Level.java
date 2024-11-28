package com.workguru.domain.model;

public enum Level {

	JUNIOR("Júnior"),
	SENIOR("Sênior"),
	PLENO("Pleno"),
	ESTAGIO("Estágio"),
	TREINEE("Treinee");
	
	private String level;
	
	private Level(String level) {
		this.level = level;
	}
	
	public String getLevel() {
		return level;
	}
}
