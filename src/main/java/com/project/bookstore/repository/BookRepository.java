package com.project.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bookstore.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
