package com.workguru.domain.model;

public enum Degree {

		BACHARELADO("Bacharelado"),
		LICENCIATURA("Licenciatura"),
		TECNOLOGO("Tecnólogo"),
		MESTRADO("Mestrado"),
		DOUTORADO("Doutorado"),
		POS_DOUTORADO("Pós-doutorado"),
		TECNICO("Técnico"),
		ENSINO_MEDIO("Ensino médio");
	
	private String degree;
	
	private Degree(String degree) {
		this.degree = degree;
	}
	
	public String getDegree() {
		return degree;
	}
}
