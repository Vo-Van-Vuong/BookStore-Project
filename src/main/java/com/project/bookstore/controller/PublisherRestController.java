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

import com.project.bookstore.entities.Publisher;
import com.project.bookstore.service.PublisherService;

@RestController
@RequestMapping("/api")
public class PublisherRestController {
	
	@Autowired
	PublisherService publisherService;
	
	@GetMapping("/publishers")
	public List<Publisher> findAllPublisher(){
		return publisherService.showAllPublisher();
	}
	
	@PostMapping("/publishers")
	public Publisher addNewPublisher(@RequestBody Publisher publisher) {
		publisherService.AddOrUpdatePublisher(publisher);
		return publisher;
	}
	
	@PutMapping("/publishers")
	public Publisher updatePublisher(@RequestBody Publisher publisher) {
		publisherService.AddOrUpdatePublisher(publisher);
		return publisher;
	}
	
	@DeleteMapping("/publishers/{publisherId}")
	public String deletePublisherById(@PathVariable int publisherId) {
		publisherService.deletePublisherById(publisherId);
		return "Delete" + publisherId;
	}
	
	@GetMapping("/publishers/{publisherId}")
	public Publisher findPublisherById(@PathVariable int publisherId) {
		Publisher publisher  =publisherService.findPublisherById(publisherId);
		return publisher;
		
	}
	
}
