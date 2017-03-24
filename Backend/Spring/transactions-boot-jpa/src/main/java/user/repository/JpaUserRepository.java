/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package user.repository;

import java.awt.Event;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import user.domain.User;

/**
 * @author Sam Brannen
 */
@Repository
public class JpaUserRepository implements UserRepository {

	private EntityManager entityManager;

	//private final JdbcTemplate jdbcTemplate;

	//@Autowired
	//public JpaUserRepository(JdbcTemplate jdbcTemplate) {
		//this.jdbcTemplate = jdbcTemplate;
	//}
	
	@PersistenceContext
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public long count() {
		String query = "select count(*) from User";

		return this.entityManager
		  .createQuery(query, Long.class)
		  .getSingleResult();
		//return jdbcTemplate.queryForObject("select count(*) from users", Long.class);
	}

	

	@Override
	public void save(User user) {
		//String sql = "insert into users(first_name, last_name, age) values(?,?,?)";
		this.entityManager.persist(user);
		//jdbcTemplate.update(sql, user.getFirstName(), user.getLastName(), user.getAge());
	}

	@Override
	public List<User> findAll() {
		return this.entityManager
				  .createQuery("from User", User.class)
				  .getResultList();
		//return jdbcTemplate.query("select * from users", userMapper);
	}

	@Override
	public User findById(Long id) {
		return this.entityManager.find(User.class, id);
		
		//String sql = "select * from users where id=?";
		//return jdbcTemplate.queryForObject(sql, userMapper, id);
	}

	@Override
	public User findByFirstNameAndLastName(String firstName, String lastName) {
		String query = "from User u where u.firstName = :firstName and u.lastName = :lastName";
		return this.entityManager
				  .createQuery(query, User.class)
				  .setParameter("firstName", firstName)
				  .setParameter("lastName", lastName)
				  .getSingleResult();
		//return jdbcTemplate.queryForObject(sql, userMapper, firstName, lastName);
	}

	@Override
	public void deleteAll() {
		this.entityManager.createQuery("delete from User").executeUpdate();
		//jdbcTemplate.update("delete from users");
	}

	@Override
	public void deleteById(Long id) {
		String query = "delete from User u where u.id = :id";

		this.entityManager.createQuery(query)
		  .setParameter("id", id)
		  .executeUpdate();
		//jdbcTemplate.update("delete from users where id=?", id);
	}


}
