package com.workguru.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.Job;
import com.workguru.domain.model.Permission;
import com.workguru.domain.model.User;
import com.workguru.repository.EnterpriseRepository;
import com.workguru.repository.PermissionRepository;


@Service
public class EnterpriseService {
	
	@Autowired
	private EnterpriseRepository enterpriseRepository;
	
	@Autowired PermissionRepository permissionRepository;

	public Enterprise save(Enterprise enterprise) {
		enterprise.setPassword(new BCryptPasswordEncoder().encode(enterprise.getPassword()));
		enterprise.setPermission(addCommonUserPermissions());
		return enterpriseRepository.save(enterprise);
	}
	
	public List<Permission> addCommonUserPermissions(){
		List<Permission> permissions = new ArrayList<>();
		permissions.add(permissionRepository.findById(1L).get());
		permissions.add(permissionRepository.findById(3L).get());
		permissions.add(permissionRepository.findById(4L).get());
		permissions.add(permissionRepository.findById(5L).get());
		permissions.add(permissionRepository.findById(6L).get());
		return permissions;
	}
	
	public Enterprise update(Long id, Enterprise enterprise) {
		Enterprise enterpriseSaved = findEnterpriseById(id);
		BeanUtils.copyProperties(enterprise, enterpriseSaved, "id");
		return enterpriseRepository.save(enterpriseSaved);
	}
	
	public Enterprise findEnterpriseById(Long id) {
		Enterprise enterpriseSaved = enterpriseRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return enterpriseSaved;
	}
	
	

}
