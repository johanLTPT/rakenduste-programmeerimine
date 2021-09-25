package com.grupp.backend.service;

import com.grupp.backend.model.Category;
import com.grupp.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getCategories(){

        return categoryRepository.findAll();
    }

    public void saveCategory(Category category) {

        categoryRepository.save(category);
    }
}
