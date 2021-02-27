package com.project.bookstore.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@IdClass(value=AuthorId.class)
@Table(name = "author")
public class Author {

	@Id
	@Column(name = "name")
	private String name;
	
	@Id
	@Column(name = "address")
	private String address;

	@Column(name = "url")
	private String url;
	
	@OneToMany(mappedBy = "author")
	private List<Book> books;

	public Author() {

	}

	public Author(String name, String address, String url) {
		this.name = name;
		this.address = address;
		this.url = url;
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "Author [name=" + name + ", address=" + address + ", url=" + url + "]";
	}

}
