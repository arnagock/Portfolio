package twitter.repository;

import java.util.List;



import twitter.domain.Tweet;
import twitter.domain.User;


public interface UserRepository{


	int count();
	
    void save(User user);
    
    void deleteAll();
    
    void deleteById(int id);
    
    User findById(int id);
    
    User findByUsername(String username);
    
    List<User> findAll();
    
    User findByFirstAndLastName(String firstName, String lastName);
    

}