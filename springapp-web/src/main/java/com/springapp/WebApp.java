package com.springapp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class WebApp {
	
		
		 @GetMapping("/")
		    public ModelAndView homePage(Model model) {
		       
			 ModelAndView mv=new ModelAndView();
			    
			 
			 	model.addAttribute("message", "Spring Boot App Deployed");
		   
		        mv.setViewName("index.html");
		        return mv;
		   
	}

}