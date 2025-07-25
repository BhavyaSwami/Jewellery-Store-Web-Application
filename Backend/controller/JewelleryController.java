// In JewelleryController.java
package com.gemzi.jewellery.controller;

import com.gemzi.jewellery.model.Jewellery;
import com.gemzi.jewellery.repository.JewelleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jewellery")
@CrossOrigin(origins = "http://localhost:4200")
public class JewelleryController {
    @Autowired
    private JewelleryRepository jewelleryRepository;

    @GetMapping
    public List<Jewellery> getAllJewellery() {
        return jewelleryRepository.findAll();
    }

    
    @PostMapping("/order/{id}")
    public String orderJewellery(@PathVariable Long id) {
        // Simple order logic (placeholder)
        return "Order placed for jewellery item with ID: " + id;
    }
}
