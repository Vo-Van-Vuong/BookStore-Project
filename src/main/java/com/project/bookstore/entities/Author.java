package com.project.bookstore.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "author")
public class Author {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String address;
	
	private String date_prepare;
	
	private String date_add;
	
	private String name_update;
	
	@OneToMany(mappedBy = "author", cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
	private List<Book> books;
	
	public Author() {
		
	}

	public Author(String name, String address, String date_prepare, String date_add, String name_update) {
		this.name = name;
		this.address = address;
		this.date_prepare = date_prepare;
		this.date_add = date_add;
		this.name_update = name_update;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDate_prepare() {
		return date_prepare;
	}

	public void setDate_prepare(String date_prepare) {
		this.date_prepare = date_prepare;
	}

	public String getDate_add() {
		return date_add;
	}

	public void setDate_add(String date_add) {
		this.date_add = date_add;
	}

	public String getName_update() {
		return name_update;
	}

	public void setName_update(String name_update) {
		this.name_update = name_update;
	}

	@Override
	public String toString() {
		return "Author [id=" + id + ", name=" + name + ", address=" + address + ", date_prepare=" + date_prepare
				+ ", date_add=" + date_add + ", name_update=" + name_update + "]";
	}
	
	public void addBook(Book theBook) {
		if(books == null) {
			books = new ArrayList<Book>();
		}
		books.add(theBook);
		
		theBook.setAuthor(this);
	}
	
	
}
