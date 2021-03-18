package com.project.bookstore.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "file")
public class File {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private long idfile;

	private String filename;
	private String type;

	@Lob
	private byte[] data;

	public File(String filename, String type, byte[] data) {
		super();
		this.filename = filename;
		this.type = type;
		this.data = data;
	}

	public long getIdfile() {
		return idfile;
	}

	public void setIdfile(long idfile) {
		this.idfile = idfile;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

}
