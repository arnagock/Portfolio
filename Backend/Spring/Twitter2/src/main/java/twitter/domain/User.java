package twitter.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class User {
	private Integer id = null;
	//private final LocalDateTime dateCreated = LocalDateTime.now();
	private final String firstName;
	private final String lastName;
	private String username;
	private String password;
	private String emailAddress;
	private List<Tweet> Tweets = new ArrayList<Tweet>();
	private List<User> following = new ArrayList<User>();
	private List<User> followedBy = new ArrayList<User>();

	public User(String firstName, String lastName, String username, String password, String emailAddress) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.emailAddress = emailAddress;
	}

	public void setId(int id){
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<User> getFollowedBy() {
		return followedBy;
	}

	public void setFollowedBy(List<User> followedBy) {
		this.followedBy = followedBy;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public List<Tweet> getTweets() {
		return Tweets;
	}

	public void setTweets(List<Tweet> tweets) {
		Tweets = tweets;
	}

	public List<User> getFollowing() {
		return following;
	}

	public void setFollowing(List<User> following) {
		this.following = following;
	}

	public Integer getId() {
		return id;
	}

}
