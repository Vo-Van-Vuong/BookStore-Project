package com.project.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.bookstore.entities.File;
import com.project.bookstore.service.FileService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FileController {

	@Autowired
	private FileService fileService;

	@PostMapping("/uploadfile")
	public String uploadFile(@RequestParam("file") MultipartFile file) {
		try {
			fileService.store(file);
			return "Upload success!";
		} catch (Exception e) {
			return "Upload fail!";
		}
	}

	@GetMapping("/files")
	public List<File> getListFiles() {
		return fileService.getAllFiles();	
	}
	
	@GetMapping("/files/{id}")
	  public File getFile(@PathVariable long id) {
	    File file = fileService.getFile(id);

	    return file;
	  }


}
