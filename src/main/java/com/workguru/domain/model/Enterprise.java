package com.workguru.domain.model;

import org.hibernate.validator.constraints.br.CNPJ;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@DiscriminatorValue("E")
@Table(name = "enterprise")
public class Enterprise extends User{

	@NotNull
	@CNPJ
	private String cnpj;
	@NotNull
	private String phone;
	private String description;
	@Column(name = "link_site")
	private String linkSite;
	private String address;

	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLinkSite() {
		return linkSite;
	}
	public void setLinkSite(String linkSite) {
		this.linkSite = linkSite;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	
	
}
