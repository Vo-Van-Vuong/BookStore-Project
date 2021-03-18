package com.project.bookstore.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.project.bookstore.entities.Book;
import com.project.bookstore.entities.File;
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
	public void deleteBookById(long id) {
		bookRepository.deleteById(id);

	}

	@Override
	@Transactional
	public Book addOrUpdateBook(Book book) {
		return bookRepository.save(book);
	}

	
	
	@Override
	@Transactional
	public Book findBookById(Long id) {
		return bookRepository.getOne(id);
	}


}
