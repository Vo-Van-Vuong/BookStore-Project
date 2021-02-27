package com.project.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.bookstore.entities.Author;
import com.project.bookstore.entities.Book;
import com.project.bookstore.service.BookService;

@RestController
@RequestMapping("/api")
public class BookRestController {
	
	@Autowired
	BookService bookService;
	
	@GetMapping("/books")
	public List<Book> showAllBook(){
	
		return bookService.showAllBook();
	}
	
	@PostMapping
	public Book addNewBook(@RequestBody Book theBook) {
		theBook.setId(null);
		bookService.saveBook(theBook);
		return theBook;
		
	}
	
	@PutMapping
	public Book updateBook(@RequestBody Book theBook) {
		bookService.saveBook(theBook);
		return theBook;
	}
	
	@GetMapping("/books/{bookId}")
	public Author showBookById(@PathVariable String bookId) {
		Book temBook = bookService.showBookById(bookId);
		return temBook.getAuthor();
	}
	
}
