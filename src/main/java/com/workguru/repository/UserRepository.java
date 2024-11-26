package com.workguru.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.workguru.domain.model.Empresa;
import com.workguru.domain.model.Pessoa;
import com.workguru.domain.model.Usuario;

public interface UserRepository extends JpaRepository<Usuario, Long>{

	Optional<Usuario> findByEmail(String email);
	
	@Query(value = "SELECT * FROM pessoa p JOIN usuario u ON p.usuario_id = u.id", nativeQuery = true)
	List<Pessoa> findAllPeople();
	
	@Query(value = "SELECT * FROM empresa e JOIN usuario u ON e.usuario_id = u.id", nativeQuery = true)
	List<Empresa> findAllEnterprise();
	
}
