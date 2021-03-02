package com.project.bookstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.bookstore.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
	
	
	@Query("from Book")
	List<Book> findAllBook();
	
	@Query("from Book where price =:min")
	List<Book> findAllBookInPrice(@Param("min") int min);
	
	@Query("from Book where ISBN =:isbn")
	List<Book> findBookByISBN(@Param("isbn") String isbn);
	
	@Query("select author.id, price from Book where price >:min and price <:max ")
	List<Object> findAuthorAndPriceByPrice(@Param("min") int min,@Param("max") int max);
	
	
	
}
