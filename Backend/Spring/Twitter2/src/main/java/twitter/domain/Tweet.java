package twitter.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Tweet {
	private Integer id = null;
	private Tweet originalTweet;
	private final String author;
	//private LocalDateTime dateCreated = LocalDateTime.now();
	private final String text;
	private List<Like> likes;
	private final TweetType type;

	public Tweet(String author, String text, TweetType type) {
		this.author = author;
		this.text = text;
		this.type = type;
//		List<Tweet> list1 = author.getTweets();
//		list1.add(this);
//		author.setTweets(list1);

	}

	public List<Like> getLikes() {
		return likes;
	}

	public void setOriginalTweet(Tweet originalTweet) {
		this.originalTweet = originalTweet;
	}

	public void setLikes(List<Like> likes) {
		this.likes = likes;
	}

	public int getId() {
		return id;
	}

	public Tweet getOriginalTweet() {
		return originalTweet;
	}

	public TweetType getType() {
		return type;
	}

	public Tweet getReplyTo() {
		return originalTweet;
	}

	public String getAuthor() {
		return author;
	}

//	public LocalDateTime getDateCreated() {
//		return dateCreated;
//	}

	public String getText() {
		return text;
	}

	public void setId(int id) {
		this.id = id;
	}

//	public void setDateCreated(LocalDateTime dateCreated) {
//		this.dateCreated = dateCreated;
//	}

	
}
