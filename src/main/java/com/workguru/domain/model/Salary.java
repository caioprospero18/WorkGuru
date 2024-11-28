package com.workguru.domain.model;

public enum Salary {

	DE_0_A_2000("De 0 à R$2.000,00"),
	DE_2000_A_5000("De R$2.000,00 à R$5.000,00"),
	DE_5000_A_10000("De R$5.000,00 à R$10.000,00"),
	DE_10000_A_20000("De R$10.000,00 à R$20.000,00"),
	MAIOR_QUE_20000("Maior que R$20.000,00");
	
	private String salary;
	
	private Salary(String salary) {
		this.salary = salary;
	}
	
	public String getSalary() {
		return salary;
	}
}
