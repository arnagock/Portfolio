package Tweet;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Map;
import Tweet.TweetService;
import org.junit.Test;

public class TEstTweet {

	@Test
	public void testSaveDelete() {
		Tweet tweet1 = new Tweet("Hello");
		Tweet tweet2 = new Tweet("Ola");
		Tweet tweet3 = new Tweet("Nihow");
		Tweet tweet4 = new Tweet("Merhaba");
		Tweet tweet5 = new Tweet("Bon döner");

		TweetService.save(tweet1);
		TweetService.save(tweet2);
		TweetService.save(tweet3);
		TweetService.save(tweet4);
		TweetService.save(tweet5);

		assertEquals(TweetService.database.size(), 5);

		TweetService.delete(tweet1.id);
		assertEquals(TweetService.database.containsKey(tweet1.id), false);

	}

	public void testfindById() {
		Tweet tweet1 = new Tweet("Hello");
		Tweet tweet2 = new Tweet("Ola");
		Tweet tweet3 = new Tweet("Nihow");
		TweetService.save(tweet1);
		TweetService.save(tweet2);
		TweetService.save(tweet3);

		assertEquals(TweetService.findById(tweet1.id), tweet1);
		assertEquals(TweetService.findById(tweet2.id), tweet2);
		assertEquals(TweetService.findById(tweet3.id), tweet3);
	}

	public void testfindAll() {
		Tweet tweet1 = new Tweet("Hello");
		Tweet tweet2 = new Tweet("Ola");
		Tweet tweet3 = new Tweet("Nihow");
		TweetService.save(tweet1);
		TweetService.save(tweet2);
		TweetService.save(tweet3);

		assertEquals(TweetService.findAll().size(), 3);
		assertEquals(TweetService.findAll().isEmpty(), false);
		assertEquals(TweetService.findAll().get(1), tweet1);
		assertEquals(TweetService.findAll().get(2), tweet2);
		assertEquals(TweetService.findAll().get(3), tweet3);

	}

}
