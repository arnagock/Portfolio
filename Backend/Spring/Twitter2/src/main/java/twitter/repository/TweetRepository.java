package twitter.repository;

import java.util.List;



import twitter.domain.Tweet;


public interface TweetRepository{


    void save(Tweet tweet);
    
    void deleteAll();
    
    void deleteById(int id);
    
    Tweet findById(int id);
    
    List<Tweet> findAll();
    
    List<Tweet> findAllByUsername(String username);
    
    List<Tweet> findAllContaining(String searchText);
    
    List<String> findAllUsernames();


}