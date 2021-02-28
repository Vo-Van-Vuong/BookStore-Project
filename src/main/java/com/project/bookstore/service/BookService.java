package com.project.bookstore.service;

import java.util.List;

import com.project.bookstore.entities.Book;



public interface BookService {
public List<Book> showAllBook();
	
	public void deleteBookById(int id);
	
	public void addOrUpdateBook(Book book);
	
	public Book findBookById(int id);
	
}
