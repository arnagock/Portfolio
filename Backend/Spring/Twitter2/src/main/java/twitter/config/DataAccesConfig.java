package twitter.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;




@Configuration
@ComponentScan("twitter.repository")
public class DataAccesConfig {

	
	@Bean
	public DataSource dataSource(){
		String url = "jdbc:h2:tcp://localhost/~/h2_pa";
		return new DriverManagerDataSource(url);
	}
	
	@Bean
	public JdbcTemplate jdbcTemplate(){
		return new JdbcTemplate(dataSource());
	}
	

}
