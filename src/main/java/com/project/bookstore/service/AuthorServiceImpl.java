package com.project.bookstore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.bookstore.entities.Author;
import com.project.bookstore.repository.AuthorRepository;

@Service
public class AuthorServiceImpl implements AuthorService {

	@Autowired
	AuthorRepository authorRepository;

	@Override
	@Transactional
	public List<Author> showAllAuthor() {
		List<Author> list = authorRepository.findAll();
		return list;
	}

	@Override
	@Transactional
	public void deleteAuthorById(int id) {
		authorRepository.deleteById(id);

	}

	@Override
	@Transactional
	public Author findAuthorById(int id) {
		Optional<Author> temp = authorRepository.findById(id);
		Author author = temp.get();
		return author;

	}

	@Override
	@Transactional
	public void addOrUpdateAuthor(Author author) {
		authorRepository.save(author);
		
	}

}
