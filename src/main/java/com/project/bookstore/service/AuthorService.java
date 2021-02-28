package com.project.bookstore.service;

import java.util.List;

import com.project.bookstore.entities.Author;

public interface AuthorService {
	
	public List<Author> showAllAuthor();
	
	public void deleteAuthorById(int id);
	
	public void addOrUpdateAuthor(Author author);
	
	public Author findAuthorById(int id);
		
	
	
}
