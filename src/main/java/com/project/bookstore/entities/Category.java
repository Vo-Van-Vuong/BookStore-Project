package com.project.bookstore.entities;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "category")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idcategory;

	private String name;

	public Category() {

	}

	public Category(String name) {
		super();
		this.name = name;
	}

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)

	@JoinTable(name = "book_category", 
	joinColumns = { @JoinColumn(name = "idcategory") }, 
	inverseJoinColumns = { @JoinColumn(name = "idbook") })
	private Set<Book> book = new HashSet<>();

	
	public long getIdcategory() {
		return idcategory;
	}

	public void setIdcategory(long idcategory) {
		this.idcategory = idcategory;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Book> getBook() {
		return book;
	}

	public void setBook(Set<Book> book) {
		this.book = book;
	}

}
