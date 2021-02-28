package com.project.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bookstore.entities.Publisher;

public interface PublisherRepository extends JpaRepository<Publisher, Integer> {

}
