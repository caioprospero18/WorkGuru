package com.workguru.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Usuario;

public interface UserRepository extends JpaRepository<Usuario, Long>{

	Optional<Usuario> findByEmail(String email);

}
