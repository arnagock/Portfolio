package twitter.tests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import java.util.List;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;

import config.RepositoryConfig;
import config.TestDataAccessConfig;
import twitter.config.DataAccesConfig;
import twitter.repository.TweetRepository;
import twitter.repository.UserRepository;
import twitter.domain.*;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes =  {RepositoryConfig.class, TestDataAccessConfig.class})
@ActiveProfiles("dev")

//@Sql({"/test-schema.sql", "/test-user-data.sql"})
//@Sql(statements = "delete from users")
public class UserServiceTest {
	
	@Autowired
	private UserRepository repository;

	@Before
	public void cleaner(){
		repository.deleteAll();
	}
	
	
//	@Test
//	@Sql(
//	    scripts = "create-test-data.sql",
//	    config = @SqlConfig(transactionMode = ISOLATED)
//	)
//	@Sql(
//	    scripts = "delete-test-data.sql",
//	    config = @SqlConfig(transactionMode = ISOLATED),
//	    executionPhase = AFTER_TEST_METHOD
//	)
//	public void userTest {
//	    // execute code that needs the test data to be committed
//	    // to the database outside of the test's transaction
//	}
	
	@Test
	public void testFindUserByID(){
	User user1 = createUser("trololol");
	User user2 = createUser("lasdnkjanre");
	repository.save(user1);
	repository.save(user2);
	
	assertThat(repository.findById(user2.getId()).equals(user2));
	assertThat(repository.findById(user1.getId()).equals(user1));
	}
	
	@Test
	public void testSaveFindAll() {
		List<User> list = new ArrayList<>();
		
		for (int i = 0; i < 10; i++) {
			User user = createUser("mega " +Integer.toString(i*i));
			list.add(user);
		}
		
		list.forEach((element)->{
			repository.save(element);
		});
		
		assertThat(list.equals(repository.findAll()));
		assertThat(repository.findAll().size() == (list.size()));
	}

	
	@Test
	public void testDeleteUserByID() {

	
		User user1 = createUser("trololol");
		User user2 = createUser("lasdnkjanre");
		repository.save(user1);
		repository.save(user2);
		
		assertThat(repository.findById(user2.getId()).equals(user2));
		assertThat(repository.findById(user1.getId()).equals(user1));
		
		repository.deleteById(user2.getId());
		List<User> list = new ArrayList<>();
		list.add(user1);
		assertThat(repository.findAll().equals(list));
	}
	
	
	
	@Test
	public void testFindUserByUsername() {
		User user1 = createUser("killerbeat");
		User user2 = createUser("asde");
		User user3 = createUser("akbar");
		User user4 = createUser("lolikopter");
		repository.save(user1);
		repository.save(user2);
		repository.save(user3);
		repository.save(user4);
		
		assertThat(repository.findByUsername("killerbeat").equals(user1));
		assertThat(repository.findByUsername("asde").equals(user2));
		assertThat(repository.findByUsername("akbar").equals(user3));
		assertThat(repository.findByUsername("lolikopter").equals(user4));
	}
	
	@Test
	public void testCountUsers() {
		for (int i = 0; i < 100; i++) {
			User user = createUser(Integer.toString(i*3));
			repository.save(user);
		}
		assertThat(repository.count() == 100);
		
		repository.deleteAll();
		assertThat(repository.count() == 0);
		
	}
	
	@Test
	//@Sql(statements = "INSERT INTO user(first_Name,last_Name,username,password,email) VALUES('Adrian', 'Gross', 'MegaMaster','123','a@a.com')")
	public void TestfindByFirstAndLastName() {
		User user1 = createUser("MegaMaster");
		
		repository.save(user1);
		System.out.println(repository.findByUsername("MegaMaster"));
		User user2 = repository.findByFirstAndLastName(user1.getFirstName(), user1.getLastName());
		user1.setId(user2.getId());
		assertThat(user1.equals(user2));
		
	}
	
	public User createUser(String somesthing){
		
		return new User("Adrian", "Gross", somesthing, "123", "a@a.com");
	}
}
