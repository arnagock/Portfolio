package user.web;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


import user.service.UserService;

@Controller
public class UserController {
	private static final String LIST_VIEW_NAME = "user/list";
	private final UserService service;
	
	@Autowired
	public UserController(UserService service) {
		this.service = service;
	}
	
	@GetMapping("/")
	public String list(Model model) {
		model.addAttribute("users", service.findAll());
		return LIST_VIEW_NAME;
	}
}
