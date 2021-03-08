package com.project.bookstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.bookstore.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
	
	
	@Query("from Book")
	List<Book> findAllBook();
}
