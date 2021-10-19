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
    @DeleteMapping("delete-item/{id}")
        public List<Item> deleteItem(@PathVariable long id){
            itemService.deleteItem(id);
            return itemService.getItems();
        }

    @PostMapping("edit-item")
        public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }
    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable long id)throws Exception{
      return itemService.getOneItem(id);
    }
    //view one item päring
}
