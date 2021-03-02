package com.project.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.bookstore.entities.Book;
import com.project.bookstore.service.BookService;

@RestController
@RequestMapping("/api")
public class BookRestController {

	@Autowired
	BookService bookService;

	@GetMapping("/books")
	public List<Book> showAllBook() {
		return bookService.showAllBook();
	}

	@PostMapping("/books")
	public Book addNewBook(@RequestBody Book book) {
		book.setId(0);
		bookService.addOrUpdateBook(book);
		return book;

	}

	@PutMapping("/books")
	public Book updateBook(@RequestBody Book book) {
		bookService.addOrUpdateBook(book);
		return book;
	}

	@GetMapping("/books/{bookId}")
	public Book showBookById(@PathVariable int bookId) {
		Book tempBook = bookService.findBookById(bookId);
		return tempBook;
	}

	@DeleteMapping("/books/{bookId}")
	public String deleteBookById(@PathVariable int bookId) {
		bookService.deleteBookById(bookId);
		return "Dele	te " + bookId;
	}
	
	@GetMapping("/books/")
	public List<Book> findAllBookInPrice(@RequestParam("price") int price){
		return bookService.findAllInPrice(price);
	}
	
	@GetMapping("/books1/")
	public List<Book> findBookByISBN(@RequestParam("isbn") String isbn) {
		return bookService.findBookByISBN(isbn);
	}
	
	@GetMapping("/books2/")
	public List<Object> findAuthorAndPriceByPrice(@RequestParam("min") int min,@RequestParam("max") int max){
		return bookService.findAuthorAndPriceByPrice(min, max);
	}
	
	
}
