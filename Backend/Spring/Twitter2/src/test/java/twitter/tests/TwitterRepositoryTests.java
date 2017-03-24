package twitter.tests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import twitter.config.DataAccesConfig;
import twitter.domain.Tweet;
import twitter.domain.TweetType;
import twitter.domain.User;
import twitter.repository.TweetRepository;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes =  DataAccesConfig.class)
public class TwitterRepositoryTests {
	
	
	@Autowired
	private TweetRepository tweetRepository;
	
	@Test
	public void testSaveTweet() {
		tweetRepository.deleteAll();
		User user1 = new User("Adrian", "Gross", "Arnagock", "123", "a@a.com");
		Tweet tweet1 = new Tweet("Arnagock", "Hello Twitter my old Friend", TweetType.TOP_LEVEL);
		tweetRepository.save(tweet1);
		assertThat(tweetRepository.findById(tweet1.getId()).equals(tweet1));
	}
	
	@Test
	public void testDeleteTweet() {

		tweetRepository.deleteAll();
	
		User user1 = new User("Adrian", "Gross", "Arnagock", "123", "a@a.com");
		Tweet tweet1 = new Tweet("Arnagock", "Hello Twitter you sucker", TweetType.TOP_LEVEL);
		tweetRepository.save(tweet1);
		Tweet tweet2 = new Tweet("Arnagock", "Dude it takes so long", TweetType.TOP_LEVEL);
		tweetRepository.save(tweet2);
		
		assertThat(tweetRepository.findById(tweet2.getId()).equals(tweet2));
		tweetRepository.deleteById(tweet2.getId());
		List<Tweet> list = new ArrayList<>();
		list.add(tweet1);
		assertThat(tweetRepository.findAll().equals(list));
	}

	@Test
	public void testFindAll() {
		User user1 = new User("Adrian", "Gross", "Arnagock", "123", "a@a.com");
		List<Tweet> list = new ArrayList<>();
		
		for (int i = 0; i < 10; i++) {
			Tweet tweet = new Tweet("Arnagock", Integer.toString(i*i), TweetType.TOP_LEVEL);
			list.add(tweet);
		}
		
		list.forEach((element)->{
			tweetRepository.save(element);
		});
		
		assertThat(list.equals(tweetRepository.findAll()));
		assertThat(tweetRepository.findAll().size() == (list.size()));
	}

	@Test
	public void testFindAllByUsername() {
		User user1 = new User("Adrian", "Gross", "Arnagock", "123", "a@a.com");
		User user2 = new User("steff", "steff", "Stefan", "123", "a@a.com");
		List<Tweet> list1 = new ArrayList<>();
		List<Tweet> list2 = new ArrayList<>();
		for (int i = 0; i < 10; i++) {
			Tweet tweet = new Tweet("Arnagock", Integer.toString(i*i), TweetType.TOP_LEVEL);
			list1.add(tweet);
		}
		
		for (int i = 0; i < 10; i++) {
			Tweet tweet = new Tweet("Stefan", Integer.toString(i*i*4), TweetType.TOP_LEVEL);
			list2.add(tweet);
		}
		
		List<Tweet> list = new ArrayList<>();
		list.addAll(list1);
		list.addAll(list2);
		
		
		list1.forEach((element)->{
			tweetRepository.save(element);
		});
		list2.forEach((element)->{
			tweetRepository.save(element);
		});
		
		assertThat(list1.equals(tweetRepository.findAllByUsername(user1.getUsername())));
		assertThat(tweetRepository.findAllByUsername(user1.getUsername()).size() == (list1.size()));
		assertThat(tweetRepository.findAll().size() == (list.size()));
	}
	
	@Test
	public void testFindAllUsernames() {
		User user1 = new User("Adrian", "Gross", "Arnagock", "123", "a@a.com");
		User user2 = new User("steff", "steff", "Stefan", "123", "a@a.com");
		User user3 = new User("fds", "ghjgf", "Lulatsch", "123", "a@a.com");
		User user4 = new User("sd", "asd", "Ficker", "123", "a@a.com");
		List<Tweet> list = new ArrayList<>();
		List<String> list1 = Arrays.asList("Arnagock", "Stefan", "Lulatsch","Ficker");
		
		for (int i = 0; i < 3; i++) {
			Tweet tweet = new Tweet("Arnagock", Integer.toString(i*i), TweetType.TOP_LEVEL);
			list.add(tweet);
		}
		
		for (int i = 0; i < 3; i++) {
			Tweet tweet = new Tweet("Stefan", Integer.toString(i*i*4), TweetType.TOP_LEVEL);
			list.add(tweet);
		}
		
		for (int i = 0; i < 3; i++) {
			Tweet tweet = new Tweet("Lulatsch", Integer.toString(i*9), TweetType.TOP_LEVEL);
			list.add(tweet);
		}
		
		for (int i = 0; i < 3; i++) {
			Tweet tweet = new Tweet("Ficker", Integer.toString(i*7), TweetType.TOP_LEVEL);
			list.add(tweet);
		}
		
		list.forEach((element)->{
			tweetRepository.save(element);
		});
		assertThat(tweetRepository.findAllUsernames().equals(list1));
	}
	
	@Test
	public void testFindAllcontaining() {
		User user1 = new User("Adrian", "Gross", "Arnagock", "123", "a@a.com");
		List<Tweet> list = new ArrayList<>();
		List<Tweet> list1 = new ArrayList<>();
		for (int i = 0; i < 10; i++) {
			Tweet tweet = new Tweet("Arnagock", Integer.toString(i*i), TweetType.TOP_LEVEL);
			list.add(tweet);
			if (i == 4 || i== 6 || i== 9) {
				list1.add(tweet);
			}
		}
		
		list.forEach((element)->{
			tweetRepository.save(element);
		});
		System.out.println(tweetRepository.findAllContaining("6"));
		assertThat(tweetRepository.findAllContaining("6").equals(list1));
		;
	}
}