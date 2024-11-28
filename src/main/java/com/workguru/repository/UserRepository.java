package com.workguru.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.Candidate;
import com.workguru.domain.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByEmail(String email);
	
	@Query(value = "SELECT * FROM candidate c JOIN user u ON c.user_id = u.id", nativeQuery = true)
	List<Candidate> findAllCandidate();
	
	@Query(value = "SELECT * FROM enterprise e JOIN user u ON e.user_id = u.id", nativeQuery = true)
	List<Enterprise> findAllEnterprise();
	
}
