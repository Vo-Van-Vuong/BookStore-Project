package com.project.bookstore.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.project.bookstore.entities.File;
import com.project.bookstore.repository.FileRepository;

@Service
public class FileService {
	@Autowired
	private FileRepository fileRep;

	public File store(MultipartFile multiparFile) throws IOException {
		String fileName = StringUtils.cleanPath(multiparFile.getOriginalFilename());
		File file = new File(fileName, multiparFile.getContentType(), multiparFile.getBytes());

		return fileRep.save(file);
	}

	public File getFile(long id) {
		return fileRep.findById(id).get();
	}
	
	public List<File> getAllFiles() {
	    return fileRep.findAll();
	}

}
