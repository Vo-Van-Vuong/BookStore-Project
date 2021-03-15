package com.project.bookstore.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "formik")
public class Formik {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private long idformik;
	
	@Column(name = "name")
	private String name;


	@Column(name = "email")
	private String email;
	
	@Column(name = "image")
	private String image;
	
	public Formik() {
		
	}
	
	public Formik(String name, String email, String image) {
		super();
		this.name = name;
		this.email = email;
		this.image = image;
	}

	public long getIdformik() {
		return idformik;
	}

	public void setIdformik(long idformik) {
		this.idformik = idformik;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
}
