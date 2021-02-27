package com.project.bookstore.service;

import java.util.List;

import com.project.bookstore.entities.Book;

public interface BookService {
	
	public List<Book> showAllBook();
	
	public void deleteBookById(String id);
	
	public void saveBook(Book book);
	
	public Book showBookById(String id);
	
	public void updateBook(Book book);
		
	
	
}
