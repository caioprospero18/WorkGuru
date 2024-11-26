package com.workguru.domain.model;

import java.util.List;

import org.hibernate.validator.constraints.br.CNPJ;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@DiscriminatorValue("E")
@Table(name = "empresa")
public class Empresa extends Usuario{

	@NotNull
	@CNPJ
	private String cnpj;
	@NotNull
	private String telefone;
	private String descricao;
	@Column(name = "link_site")
	private String linkSite;
	private String endereco;
	@OneToMany(mappedBy = "empresa")
	private List<Vaga> vagas;

	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getLinkSite() {
		return linkSite;
	}
	public void setLinkSite(String linkSite) {
		this.linkSite = linkSite;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	public List<Vaga> getVagas() {
		return vagas;
	}
	public void setVagas(List<Vaga> vagas) {
		this.vagas = vagas;
	}

	
	
}
