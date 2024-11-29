package com.workguru.domain.model;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "job")
public class Job {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String title;
	@NotNull
	@Enumerated(EnumType.STRING)
	private Tecnology tecnology;
	@NotNull
	@Column(name="job_area")
	private String jobArea;
	@NotNull
	private String description;
	@NotNull
	@Enumerated(EnumType.STRING)
	private Level level;
	@NotNull
	@Enumerated(EnumType.STRING)
	private Model model;
	@NotNull
	@Enumerated(EnumType.STRING)
	private Salary salary;
	@NotNull
	@Enumerated(EnumType.STRING)
	private JobStatus status;
	@NotNull
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Column(name = "publish_date")
	private LocalDate publishDate;
	@NotNull
	@ManyToOne
	@JoinColumn(name = "enterprise_id")
	private Enterprise enterprise;
	@ManyToMany(fetch = FetchType.EAGER) // fetch = buscar - eager = ancioso
	@JoinTable(name = "job_candidate", joinColumns = @JoinColumn(name = "job_id"), 
	inverseJoinColumns = @JoinColumn(name = "candidate_id"))
	private List<Candidate> candidate;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Tecnology getTecnology() {
		return tecnology;
	}
	public void setTecnology(Tecnology tecnology) {
		this.tecnology = tecnology;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Level getLevel() {
		return level;
	}
	public void setLevel(Level level) {
		this.level = level;
	}
	public Model getModel() {
		return model;
	}
	public void setModel(Model model) {
		this.model = model;
	}
	public Salary getSalary() {
		return salary;
	}
	public void setSalary(Salary salary) {
		this.salary = salary;
	}
	public JobStatus getStatus() {
		return status;
	}
	public void setStatus(JobStatus status) {
		this.status = status;
	}
	public LocalDate getPublishDate() {
		return publishDate;
	}
	public void setPublishDate(LocalDate publishDate) {
		this.publishDate = publishDate;
	}
	public Enterprise getEnterprise() {
		return enterprise;
	}
	public void setEnterprise(Enterprise enterprise) {
		this.enterprise = enterprise;
	}
	public List<Candidate> getCandidate() {
		return candidate;
	}
	public void setCandidate(List<Candidate> candidate) {
		this.candidate = candidate;
	}
	public String getJobArea() {
		return jobArea;
	}
	public void setJobArea(String jobArea) {
		this.jobArea = jobArea;
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
		Job other = (Job) obj;
		return Objects.equals(id, other.id);
	}
	
	
}
