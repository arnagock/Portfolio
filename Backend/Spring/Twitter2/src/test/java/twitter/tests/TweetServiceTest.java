package twitter.tests;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import twitter.config.DataAccesConfig;
import twitter.repository.TweetRepository;


@RunWith(SpringRunner.class)
@ContextConfiguration(classes =  DataAccesConfig.class)
public class TweetServiceTest {
	
	@Autowired
	private TweetRepository tweetRepository;

	@Test
	public void test() {
		fail("Not yet implemented");
	}

}
