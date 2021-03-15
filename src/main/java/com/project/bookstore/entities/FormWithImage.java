package com.project.bookstore.entities;

import org.springframework.web.multipart.MultipartFile;

public class FormWithImage {
	
	private String name;
	private String email;
	private MultipartFile image;
	
	public FormWithImage() {
		
	}
	
	public FormWithImage(String name, String email, MultipartFile image) {
		this.name = name;
		this.email = email;
		this.image = image;
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
	public MultipartFile getImage() {
		return image;
	}
	public void setImage(MultipartFile image) {
		this.image = image;
	}
	
	
}
