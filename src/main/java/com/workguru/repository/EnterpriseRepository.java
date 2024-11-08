package com.workguru.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Empresa;

public interface EnterpriseRepository extends JpaRepository<Empresa, Long>{

	Optional<Empresa> findByCnpj(String cnpj);
}
