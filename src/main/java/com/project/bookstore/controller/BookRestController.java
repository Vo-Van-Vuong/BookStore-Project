package com.project.bookstore.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.bookstore.entities.Book;
import com.project.bookstore.repository.BookRepository;
import com.project.bookstore.service.BookService;
import com.project.bookstore.utils.FileUploadUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BookRestController {

	@Autowired
	BookService bookService;
	
	@Autowired
	BookRepository bookRep;

	@GetMapping("/books")
	public List<Book> showAllBook() {
		return bookService.showAllBook();
	}
	
	@GetMapping("/allbooks")
	public List<Book> getBooks() throws IOException {
		return bookService.showAllBook();
	}


	@PostMapping("/addnewbook")
	public Book addNewBook(
			@RequestParam("title") String title, 
			@RequestParam("author") String author,
			@RequestParam("price") int price,
			@RequestParam("rating") int rating,
			@RequestParam("image") MultipartFile file) 
		throws IOException{
		

		Book book = new Book(title, author, price, rating, file.getBytes());
		return bookService.addOrUpdateBook(book);
		 
	}

	@PutMapping("/books")
	public Book updateBook(@RequestBody Book book) {
		bookService.addOrUpdateBook(book);
		return book;
	}

	@GetMapping("/book/{bookId}")
	public Optional<Book> showBookById(@PathVariable Long bookId) {
		return bookRep.findById(bookId);
	}

	
	  @DeleteMapping("/book/{bookId}") 
	  public void deleteBookById(@PathVariable Long bookId) { 
		  bookRep.deleteById(bookId);
	  }
	
}
