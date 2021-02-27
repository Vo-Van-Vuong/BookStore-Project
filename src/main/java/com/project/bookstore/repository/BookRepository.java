package com.project.bookstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.bookstore.entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {
	
	@Query("from Book")
	List<Book> showAllBook();
	
	@Modifying
	@Query("delete from Book where id=:id")
	void deleteBookByISBN(@Param("id") String id);
	
	@Query("from Book where id=:id")
	Book showBookById(@Param("id") String id);
	
	
	
}
