package twitter.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import twitter.config.DataAccesConfig;
import twitter.domain.Tweet;
import twitter.domain.User;

import twitter.repository.TweetRepository;
import twitter.repository.UserRepository;

@Service
public class TweetService {

	private static TweetRepository tweetRepository;
	private static UserRepository userRepository;
	private static JavaMailSender javaMailSender;

	@Autowired
	public TweetService(TweetRepository tweetRepository) {
		this.tweetRepository = tweetRepository;
	}
	
	@Autowired
	public TweetService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	
	@Autowired
	public TweetService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	

	public void save(Tweet tweet){
		tweetRepository.save(tweet);
		//ADD SEND EMAIL HERE
		//userRepository.findByUsername(tweet.getAuthor()).getEmailAddress();
    }
    
    public void deleteById(Integer id){
    	tweetRepository.deleteById(id);
    }
    
    public Tweet findById(Integer id){
    	return tweetRepository.findById(id);
    }
    
    public List<Tweet> findAll(){
    	return tweetRepository.findAll();
    }
    
    public List<Tweet> findAllByUsername(String username){
    	return tweetRepository.findAllByUsername(username);
    }
    
    public List<Tweet> findAllContainingHashTag(String hashTag){
    	return tweetRepository.findAllContaining("#"+hashTag);
    }
    
    public List<Tweet> findAllMentioningUsername(String username){
    	return tweetRepository.findAllContaining("@"+username);
    }


}
