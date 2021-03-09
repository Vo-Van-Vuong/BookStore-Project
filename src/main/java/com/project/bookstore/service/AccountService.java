package com.project.bookstore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.bookstore.repository.AccountReposity;

@Service
public class AccountService {
	
	@Autowired
	AccountReposity accountRep;
	
	
	
}
