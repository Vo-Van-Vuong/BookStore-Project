package com.project.bookstore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.bookstore.entities.Publisher;
import com.project.bookstore.repository.PublisherRepository;

@Service
public class PublisherServiceImpl implements PublisherService {
	
	@Autowired
	PublisherRepository publisherRepository;

	@Override
	@Transactional
	public List<Publisher> showAllPublisher() {
		
		return publisherRepository.findAll();
	}

	@Override
	@Transactional
	public void deletePublisherById(int id) {
		publisherRepository.deleteById(id);

	}

	@Override
	@Transactional
	public Publisher findPublisherById(int id) {
		Optional<Publisher> tempPublisher = publisherRepository.findById(id);
		Publisher publisher = tempPublisher.get();
		return publisher;
	}

	@Override
	@Transactional
	public void AddOrUpdatePublisher(Publisher publisher) {
		publisherRepository.save(publisher);

	}

}
