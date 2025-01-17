package com.workguru.domain.model;

public enum Gender {

	MASCULINO("Masculino"),
	FEMININO("Feminino"),
	OUTRO("Outro");
	
	private String gender;
	
	private Gender(String gender) {
		this.gender = gender;
	}
	
	public String getGender() {
		return gender;
	}
}
