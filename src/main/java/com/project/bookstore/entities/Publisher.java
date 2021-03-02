package com.project.bookstore.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="publisher")
public class Publisher implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="address")
	private String address;
	
	private String phone;
	
	@OneToMany(mappedBy = "publisher", 
			cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	private List<Book> abooks;

	public Publisher(String name, String address, String phone) {
		this.name = name;
		this.address = address;
		this.phone = phone;
	}

	public Publisher() {
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}



	public List<Book> getAbooks() {
		return abooks;
	}

	public void setAbooks(List<Book> abooks) {
		this.abooks = abooks;
	}

	@Override
	public String toString() {
		return "Publisher [id=" + id + ", name=" + name + ", address=" + address + ", phone=" + phone + "]";
	}
	
	public void addBooks(Book theBook) {
		if(abooks == null) {
			abooks = new ArrayList<Book>();
		}
		abooks.add(theBook);
		theBook.setPublisher(this);
		
	}
	
	
}
