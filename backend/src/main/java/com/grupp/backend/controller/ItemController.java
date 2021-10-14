package com.grupp.backend.controller;

import com.grupp.backend.model.Item;
import com.grupp.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins= "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;
    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
    }
    @PostMapping("items")
        public void postItems(@RequestBody  Item item) {
        itemService.saveItem(item);
        //return "Ese edukalt lisatud " + item.getName();
        }
        //Localhost:8080/items

    //Delete, edit päringud
    //view one item päring
}
