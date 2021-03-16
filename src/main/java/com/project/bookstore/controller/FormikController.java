package com.project.bookstore.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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

	

	@PostMapping("/upload")
	public String uploadFile(@RequestParam("email") String email, @RequestParam("name") String name,
			@RequestParam("image") MultipartFile file) throws IOException {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		Formik savedFormik = formikRep.save(new Formik(name, email, fileName));
		
		String uploadDir = "src/main/resources/static/user-photos/" + savedFormik.getIdformik();

		FileUploadUtil.saveFile(uploadDir, fileName, file);

		return fileName;
	}

	@GetMapping("/getimage/{id}")
	public @ResponseBody Map<String, String> getFormik(@PathVariable Long id) throws IOException {
		Map<String, String> jsonMap = new HashMap<>();
		try {
			
			String imageName = formikRep.getOne(id).getImage();
			String imagesPath = "static/user-photos/" + id.toString()+"/";
			System.out.println(imagesPath);
			File file = new ClassPathResource(imagesPath + imageName).getFile();
			
			String encodeImage = Base64.getEncoder().withoutPadding().encodeToString(Files.readAllBytes(file.toPath()));

			jsonMap.put("content", encodeImage);

			return jsonMap;
		} catch (Exception e) {
			jsonMap.put("error", e.toString());
			return jsonMap;
		}
	}

}
