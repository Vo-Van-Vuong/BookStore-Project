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
		List<Book> temp = bookRepository.findAll();
		return temp;
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

	@Override
	@Transactional
	public List<Book> findAllInPrice (int min) {
		List<Book> list = bookRepository.findAllBookInPrice(min);
		return list;
	}

	@Override
	public List<Book> findBookByISBN(String isbn) {
		List<Book> book = bookRepository.findBookByISBN(isbn);
		return book;
	}

	@Override
	public List<Object> findAuthorAndPriceByPrice(int min, int max) {
		List<Object> object = bookRepository.findAuthorAndPriceByPrice(min, max);
		return object;
	}


}
