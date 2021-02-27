package com.project.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bookstore.entities.Author;
import com.project.bookstore.entities.AuthorId;

public interface AuthorRepository extends JpaRepository<Author, AuthorId> {

}
