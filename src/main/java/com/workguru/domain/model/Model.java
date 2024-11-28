package com.workguru.domain.model;

public enum Model {

	HIBRIDO("Híbrido"),
	PRESENCIAL("Presencial"),
	HOME_OFFICE("Home Office");
	
	private String model;
	
	private Model(String model) {
		this.model = model;
	}
	
	public String getModel() {
		return model;
	}
}
