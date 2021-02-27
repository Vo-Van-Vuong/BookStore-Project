package com.project.bookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.bookstore.entities.Book;
import com.project.bookstore.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	BookRepository bookRepository;
	
	@Override
	@Transactional
	public List<Book> showAllBook() {
		List<Book> list = bookRepository.showAllBook();
		return list;
	}

	@Override
	@Transactional
	public void deleteBookById(String id) {
		bookRepository.deleteBookByISBN(id);

	}

	@Override
	@Transactional
	public void saveBook(Book book) {
		bookRepository.save(book);

	}

	@Override
	@Transactional
	public Book showBookById(String id) {
		Book book = bookRepository.showBookById(id);
		return book;
	}

	@Override
	@Transactional
	public void updateBook(Book book) {
		bookRepository.save(book);
		
	}

}
