package com.workguru.domain.model;

import java.time.LocalDate;

import org.hibernate.validator.constraints.br.CPF;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@DiscriminatorValue("P")
@Table (name = "candidate")
@PrimaryKeyJoinColumn(name="user_id")
public class Candidate extends User{
	@NotNull
	@CPF
	private String cpf;
	@NotNull
	private String phone;
	@NotNull
	@Enumerated(EnumType.STRING)
	private CandidateStatus status;
	@NotNull
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Column(name = "birth_date")
	private LocalDate birthDate;
	@NotNull
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@Embedded
	private Address address;

	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public CandidateStatus getStatus() {
		return status;
	}
	public void setStatus(CandidateStatus status) {
		this.status = status;
	}
	public LocalDate getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}

	
}
