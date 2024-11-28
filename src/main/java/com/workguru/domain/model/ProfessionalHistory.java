package com.workguru.domain.model;

import java.time.LocalDate;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "professional_history")
public class ProfessionalHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate start;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate finish;
	@NotNull
	private String position;
	private String description;
	@NotNull
	@JoinColumn(name = "candidate_id")
	@ManyToOne
	private Candidate candidate;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public LocalDate getStart() {
		return start;
	}
	public void setStart(LocalDate start) {
		this.start = start;
	}
	public LocalDate getFinish() {
		return finish;
	}
	public void setFinish(LocalDate finish) {
		this.finish = finish;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Candidate getCandidate() {
		return candidate;
	}
	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProfessionalHistory other = (ProfessionalHistory) obj;
		return Objects.equals(id, other.id);
	}
	
	
}
