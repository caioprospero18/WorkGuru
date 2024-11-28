package com.workguru.domain.model;

public enum Tecnology {

	JAVA("Java"),
	PYTHON("Python"),
	JAVASCRIPT("JavaScript"),
	HTML5("HTML5"),
	CSS3("CSS3"),
	TYPESCRIPT("TypeScript");
	
	private String tecnology;
	
	private Tecnology(String tecnology) {
		this.tecnology = tecnology;
	}
	
	public String getTecnology() {
		return tecnology;
	}
}
