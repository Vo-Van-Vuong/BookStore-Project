package com.project.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bookstore.entities.Author;


public interface AuthorRepository extends JpaRepository<Author, Integer> {

}
