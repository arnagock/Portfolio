package twitter.repository;

import java.util.ArrayList;
import java.util.Formatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import twitter.config.DataAccesConfig;
import twitter.domain.Tweet;
import twitter.domain.TweetType;

@Repository
public class JdbcTweetRepository implements TweetRepository {
	private final JdbcTemplate jdbcTemplate;

	
	@Autowired
	public JdbcTweetRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Override
	 public void save(Tweet tweet) {
		String sql="INSERT INTO tweet(original_tweet, author,text,tweet_type) values(?,?,?,?)";
		int originalTweet = -1;
	
		if (tweet.getOriginalTweet()!= null) {
			originalTweet = tweet.getOriginalTweet().getId();
		}
		String author = tweet.getAuthor();
		//String date = tweet.getDateCreated().toString();
		String text = tweet.getText();
		String type = tweet.getType().toString();
		
		jdbcTemplate.update(sql,originalTweet,author,text,type);
		
	}
	@Override
	public void deleteAll() {
		String sql = "DROP TABLE tweet IF EXISTS";
		jdbcTemplate.update(sql);
		String sql1 = "CREATE TABLE tweet (id INTEGER NOT NULL IDENTITY,original_tweet VARCHAR(100) ,author VARCHAR(20) NOT NULL,text VARCHAR(250) NOT NULL,tweet_type VARCHAR(10) NOT NULL)";
		jdbcTemplate.update(sql1);
	}
	
	@Override
	public void deleteById(int id) {
		String sql = "DELETE FROM tweet WHERE id=?";
		jdbcTemplate.update(sql,id);
		
	}


	@Override
	public Tweet findById(int id) {
		String sql = "select * from tweet where id=?";
		Tweet tweet = jdbcTemplate.queryForObject(sql, (rs, rowNum) ->  {
			TweetType type = TweetType.TOP_LEVEL;
			if (rs.getString("tweet_type") == "REPLY") {
				type = TweetType.REPLY;
			}else if (rs.getString("tweet_type") == "RETWEET") {
				type = TweetType.RETWEET;
			}
			return new Tweet(
					rs.getString("author"),
					rs.getString("text"),
					type
			);
			
	}, id);
		tweet.setId(id);
		return tweet;
	}


	@Override
	public List<Tweet> findAll() {
		
		String sql = "select * from tweet";
		List<Tweet> tweets = jdbcTemplate.query(sql, (rs, rowNum) ->  {
			TweetType type = TweetType.TOP_LEVEL;
			if (rs.getString("tweet_type") == "REPLY") {
				type = TweetType.REPLY;
			}else if (rs.getString("tweet_type") == "RETWEET") {
				type = TweetType.RETWEET;
			}
			Tweet pending = new Tweet(
					rs.getString("author"),
					rs.getString("text"),
					type
			);
			pending.setId(rs.getInt("id"));
			return pending; 
	});
		return tweets;
	}


	@Override
	public List<Tweet> findAllByUsername(String username) {
		String sql = "select * from tweet where author=?";
		List<Tweet> tweets = jdbcTemplate.query(sql, (rs, rowNum) ->  {
			TweetType type = TweetType.TOP_LEVEL;
			if (rs.getString("tweet_type") == "REPLY") {
				type = TweetType.REPLY;
			}else if (rs.getString("tweet_type") == "RETWEET") {
				type = TweetType.RETWEET;
			}
			Tweet pending = new Tweet(
					rs.getString("author"),
					rs.getString("text"),
					type
			);
			pending.setId(rs.getInt("id"));
			return pending;
	},username);
		return tweets;
	}


	@Override
	public List<Tweet> findAllContaining(String searchText) {
		String sql = "select * from tweet where text like ?";
		List<Tweet> tweets = jdbcTemplate.query(sql, (rs, rowNum) ->  {
			TweetType type = TweetType.TOP_LEVEL;
			if (rs.getString("tweet_type") == "REPLY") {
				type = TweetType.REPLY;
			}else if (rs.getString("tweet_type") == "RETWEET") {
				type = TweetType.RETWEET;
			}
			Tweet pending = new Tweet(
					rs.getString("author"),
					rs.getString("text"),
					type
			);
			pending.setId(rs.getInt("id"));
			return pending;
	},"%" + searchText + "%");
		return tweets;
	}


	@Override
	public List<String> findAllUsernames() {
		String sql = "select author from tweet";
		List<String> users = jdbcTemplate.query(sql, (rs, rowNum) ->  {
								return rs.getString("author");
	});
		List<String> users2 = new ArrayList(); 
		users.forEach((element) -> {
			if (users2.contains(element)) {
				
			}else {
				users2.add(element);
			}
		});
		return users2;
	}
	

}
