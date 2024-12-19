package com.workguru.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workguru.domain.model.Permission;

public interface PermissionRepository extends JpaRepository<Permission, Long>{

	Optional<Permission> findById(long id);

}
