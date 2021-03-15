package com.project.bookstore.controller;



import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;

import com.project.bookstore.entities.FormWithImage;
import com.project.bookstore.entities.Formik;
import com.project.bookstore.repository.FormikRepository;
import com.project.bookstore.utils.FileUploadUtil;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FormikController {
	@Autowired
	private FormikRepository formikRep;
	
	@PostMapping("/formik")
	public boolean addFormik(@RequestBody Formik formik) {
		try {
			formikRep.save(formik);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}
	
	@PostMapping(value="/uploadForm", consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE })
	public boolean uploadForm(@RequestBody FormWithImage data) {
		
		return true;
	}
	
	@PostMapping("/upload")
	public String uploadFile(@RequestParam("email") String email ,@RequestParam("name") String name, @RequestParam("image") MultipartFile file) throws IOException{
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		Formik savedFormik = formikRep.save(new Formik(name, email, fileName));
		
		
		String uploadDir = "user-photos/" + savedFormik.getIdformik();
		 
        FileUploadUtil.saveFile(uploadDir, fileName, file);
		
		return fileName;
	}
	
}
