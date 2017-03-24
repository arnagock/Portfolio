package Tweet;
import java.awt.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class TweetService {
	static Map<String, Tweet> database = new HashMap<>();

	public static void main(String[] args) {
		fillDatabase();

	}

	public static void save(Tweet tweet) {
		database.put(tweet.id, tweet);
	};

	public static void delete(String id) {
		database.remove(id);
	};

	public static Tweet findById(String id) {
		Tweet outputTweet = database.get(id);
		return outputTweet;
	};

	public static ArrayList<Tweet> findAll() {
		ArrayList<Tweet> list = new ArrayList<>(database.values());
		return list;
	};

	public static void fillDatabase() {
		Tweet tweet1 = new Tweet("hi1");
		Tweet tweet2 = new Tweet("hi2");
		Tweet tweet3 = new Tweet("hi3");
		Tweet tweet4 = new Tweet("hi4");
		Tweet tweet5 = new Tweet("hi5");

		save(tweet1);
		save(tweet2);
		save(tweet3);
		save(tweet4);
		save(tweet5);

	}
}
