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
import org.springframework.web.bind.annotation.RestController;

import com.project.bookstore.entities.Author;
import com.project.bookstore.service.AuthorService;



@RestController
@RequestMapping("/api")
public class AuthorRestController {
	
	@Autowired
	AuthorService authorService;
	
	@GetMapping("/authors")
	public List<Author> showAllAuthor(){
	
		return authorService.showAllAuthor();
	}
	
	@PostMapping("/authors")
	public Author addNewAuthor(@RequestBody Author author) {
		author.setId(0);
		authorService.addOrUpdateAuthor(author);
		return author;
		
	}
	
	@PutMapping("/authors")
	public Author updateAuthor(@RequestBody Author author) {
		authorService.addOrUpdateAuthor(author);
		return author;
	}
	
	@GetMapping("/authors/{authorId}")
	public Author showAuthorById(@PathVariable int authorId) {
		Author tempAuthor = authorService.findAuthorById(authorId);
		return tempAuthor;
	}
	
	@DeleteMapping("/authors/{authorId}")
	public String deleteAuthorById(@PathVariable int authorId) {
		authorService.deleteAuthorById(authorId);
		return "Delete"+ authorId;
	}
	
}
