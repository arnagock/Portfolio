package twitter.domain;

public class Like {
	private final String id = java.util.UUID.randomUUID().toString();
	private final Tweet tweet;
	private final User user;

	public Like(Tweet tweet, User user) {
		this.tweet = tweet;
		this.user = user;
	}

	public String getId() {
		return id;
	}

	public Tweet getTweet() {
		return tweet;
	}

	public User getUser() {
		return user;
	}

}
