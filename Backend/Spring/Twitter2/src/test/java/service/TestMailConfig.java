
package service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Profile;
import org.subethamail.wiser.Wiser;

import twitter.service.MailConfig;

@Configuration
@Import(MailConfig.class)
public class TestMailConfig {

	
	@Bean 
	public int smtpPort(){
		return 25;
	}
	
	@Bean(initMethod = "start", destroyMethod = "stop")
	public Wiser wiser(String smtpHost){
		Wiser wiser = new Wiser(smtpPort());
		wiser.setHostname(smtpHost);
		return wiser;
	}
	

}
