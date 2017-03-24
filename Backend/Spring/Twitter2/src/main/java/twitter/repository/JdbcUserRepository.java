


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
import twitter.domain.User;

@Repository
public class JdbcUserRepository implements UserRepository {
	private final JdbcTemplate jdbcTemplate;

	
	@Autowired
	public JdbcUserRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}


	@Override
	public int count() {
		List<User> users = findAll();
		return users.size();
	}


	@Override
	public void save(User user) {
		String sql="INSERT INTO user(first_Name,last_Name,username,password,email) values(?,?,?,?,?)";
		
		String first_Name = user.getFirstName();
		String last_Name = user.getLastName();
		String username = user.getUsername();
		String password = user.getPassword();
		String email = user.getEmailAddress();
		jdbcTemplate.update(sql,first_Name,last_Name,username,password,email);
		user.setId(findByUsername(user.getUsername()).getId());
		
	}


	@Override
	public void deleteAll() {
		String sql = "DROP TABLE user IF EXISTS";
		jdbcTemplate.update(sql);
		String sql1 = "CREATE TABLE user (id INTEGER NOT NULL IDENTITY,first_Name VARCHAR(50) ,last_Name VARCHAR(50) NOT NULL,username VARCHAR(250) NOT NULL,password VARCHAR(20) NOT NULL,email VARCHAR(20) NOT NULL)";
		jdbcTemplate.update(sql1);
	}


	@Override
	public void deleteById(int id) {
		String sql = "DELETE FROM user WHERE id=?";
		jdbcTemplate.update(sql,id);
		
	}


	@Override
	public User findById(int id) {
		String sql = "select * from user where id=?";
		User user = jdbcTemplate.queryForObject(sql, (rs, rowNum) ->  {
			User pending = new User(
					rs.getString("first_name"),
					rs.getString("last_name"),
					rs.getString("username"),
					rs.getString("password"),
					rs.getString("email")
			);
			pending.setId(rs.getInt("id"));
			return pending; 
	}, id);
		return user;
	}


	@Override
	public List<User> findAll() {
		String sql = "select * from user";
		List<User> users = jdbcTemplate.query(sql, (rs, rowNum) ->  {
			User pending = new User(
					rs.getString("first_name"),
					rs.getString("last_name"),
					rs.getString("username"),
					rs.getString("password"),
					rs.getString("email")
			);
			pending.setId(rs.getInt("id"));
			return pending; 
	});
		return users;
	}


	@Override
	public User findByFirstAndLastName(String firstName, String lastName) {
		String sql = "select * from user where first_Name=? AND last_Name=?";
		User user = jdbcTemplate.queryForObject(sql, (rs, rowNum) ->  {
			User pending = new User(
					rs.getString("first_name"),
					rs.getString("last_name"),
					rs.getString("username"),
					rs.getString("password"),
					rs.getString("email")
			);
			pending.setId(rs.getInt("id"));
			return pending; 
	}, firstName,lastName);
		return user;
	}


	@Override
	public User findByUsername(String username) {
		String sql = "select * from user where username=?";
		User user = jdbcTemplate.queryForObject(sql, (rs, rowNum) ->  {
			User pending = new User(
					rs.getString("first_name"),
					rs.getString("last_name"),
					rs.getString("username"),
					rs.getString("password"),
					rs.getString("email")
			);
			pending.setId(rs.getInt("id"));
			return pending; 
	}, username);
		return user;
	}

	
}