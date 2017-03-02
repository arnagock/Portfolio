package Twitter;

import java.awt.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class TweetService {// LinkedHash Map returns values in order and not
							// random
	static Map<String, Tweet> database = new LinkedHashMap<>();

	public static void save(Tweet tweet) {
		database.put(tweet.getId(), tweet);
	};

	public static void delete(String id) {
		database.remove(id);
	};

	public static Tweet findById(String id) {
		Tweet outputTweet = database.get(id);
		return outputTweet;
	};

	/// use return value List so people dont know what type of list you return
	public static ArrayList<Tweet> findAll() {
		return new ArrayList<>(database.values());
	};

	public void fillDatabase() {
		Tweet tweet1 = new Tweet("Hello");
		Tweet tweet2 = new Tweet("Ola");
		Tweet tweet3 = new Tweet("Nihow");
		Tweet tweet4 = new Tweet("Merhaba");
		Tweet tweet5 = new Tweet("Bon döner");

		save(tweet1);
		save(tweet2);
		save(tweet3);
		save(tweet4);
		save(tweet5);

	}
}
