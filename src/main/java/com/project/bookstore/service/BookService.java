package com.project.bookstore.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.project.bookstore.entities.Book;

public interface BookService {
	public List<Book> showAllBook();

	public void deleteBookById(int id);

	public void addOrUpdateBook(Book book);

	public Book findBookById(int id);
	
	public List<Book> findAllInPrice(int min);
	
	public List<Book> findBookByISBN(String isbn);
		
	public List<Object> findAuthorAndPriceByPrice(int min,int max);
	

}
