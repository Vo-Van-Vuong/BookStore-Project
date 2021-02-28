package com.project.bookstore.service;

import java.util.List;
import java.util.Optional;

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
		List<Book> list = bookRepository.findAll();
		return list;
	}

	@Override
	@Transactional
	public void deleteBookById(int id) {
		bookRepository.deleteById(id);

	}

	@Override
	@Transactional
	public void addOrUpdateBook(Book book) {
		bookRepository.save(book);

	}

	@Override
	@Transactional
	public Book findBookById(int id) {
		Optional<Book> temp = bookRepository.findById(id);
		Book book = temp.get();
		return book;
	}

}
