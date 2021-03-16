package com.project.bookstore.service;

import java.util.List;

import com.project.bookstore.entities.Book;

public interface BookService {
	public List<Book> showAllBook();

	public void deleteBookById(long id);

	public Book addOrUpdateBook(Book book);

	public Book findBookById(Long id);

	
	

}
