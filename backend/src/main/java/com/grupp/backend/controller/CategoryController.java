package com.grupp.backend.controller;

import com.grupp.backend.model.Category;
import com.grupp.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;
    @GetMapping("categories")
    public List<Category> getCategories(){
        return categoryService.getCategories();
    }
    @PostMapping("categories")
        public String postCategories(@RequestBody  Category category) {
        categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud " + category.getName();}
        //Localhost:8080/categories

    //Delete, edit päringud
    //view one item päring
}
