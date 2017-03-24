package twitter.service;

import java.util.ArrayList;
import java.util.List;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import config.TestDataAccessConfig;
import twitter.config.DataAccesConfig;
import twitter.domain.Tweet;
import twitter.domain.User;
import twitter.repository.TweetRepository;
import twitter.repository.UserRepository;

@Service
@RunWith(SpringRunner.class)
@ContextConfiguration(classes =  {TestDataAccessConfig.class})
public class UserService {
	private static TweetRepository tweetRepository;
	private static UserRepository userRepository;
	private static JavaMailSender javaMailSender;

	@Autowired
	public UserService(TweetRepository tweetRepository) {
		this.tweetRepository = tweetRepository;
	}
	
	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	
	@Autowired
	public UserService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	

	public void save(User user){
		userRepository.save(user);
		//ADD SEND EMAIL HERE
		//userRepository.findByUsername(tweet.getAuthor()).getEmailAddress();
    }
    
    public void deleteById(Integer id){
    	userRepository.deleteById(id);
    }
    
    public User findById(Integer id){
    	return userRepository.findById(id);
    }
    
    public List<User> findAll(){
    	return userRepository.findAll();
    }
    
    public User findUserByUsername(String username){
    	return userRepository.findByUsername(username);
    }
    
   public int countAllUsers(){
	   return userRepository.count();
   }
   
   public User findByFirstAndLastName(String firstName, String lastName){
	   return userRepository.findByFirstAndLastName(firstName, lastName);
   }
   

}