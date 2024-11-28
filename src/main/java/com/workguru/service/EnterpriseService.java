package com.workguru.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.workguru.domain.model.Enterprise;
import com.workguru.domain.model.Job;
import com.workguru.repository.EnterpriseRepository;


@Service
public class EnterpriseService {
	
	@Autowired
	private EnterpriseRepository enterpriseRepository;
	
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
