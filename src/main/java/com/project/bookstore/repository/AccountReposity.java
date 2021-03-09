package com.project.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bookstore.entities.Account;

public interface AccountReposity extends JpaRepository<Account, Long>{

}
