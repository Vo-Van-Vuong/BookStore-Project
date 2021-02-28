package com.project.bookstore.service;

import java.util.List;

import com.project.bookstore.entities.Publisher;

public interface PublisherService {
	
	public List<Publisher> showAllPublisher();
		
	public void deletePublisherById(int id);
	
	public Publisher findPublisherById(int id);
	
	public void AddOrUpdatePublisher(Publisher publisher);
	
}
