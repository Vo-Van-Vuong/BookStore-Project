package com.project.bookstore.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Book")
public class Book {

	@Id
	@Column(name = "isbn")
	private String id;

	@Column(name = "year")
	private int year;

	@Column(name = "title")
	private String title;

	@Column(name = "price")
	private int price;

	@ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH}, fetch = FetchType.EAGER)
	@JoinColumns({ @JoinColumn(name = "authorname",referencedColumnName = "name"), @JoinColumn(name = "authoraddress",referencedColumnName = "address") })
	private Author author;

	public Book() {
	}

	public Book(String id, int year, String title, int price) {
		this.id = id;
		this.year = year;
		this.title = title;
		this.price = price;
	}


	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", year=" + year + ", title=" + title + ", price=" + price + ", author=" + author
				+ "]";
	}

	

}
