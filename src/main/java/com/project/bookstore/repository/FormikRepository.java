package com.project.bookstore.repository;

import com.project.bookstore.entities.Formik;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface FormikRepository extends JpaRepository<Formik, Long>{

}
