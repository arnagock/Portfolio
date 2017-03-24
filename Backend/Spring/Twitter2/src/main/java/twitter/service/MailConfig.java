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

package twitter.service;

import java.util.Properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfig {

	@Bean 
	public String smtpHost(){
		return "localhost";
	}
	
	@Bean 
	public int smtpPort(){
		return 25;
	}
	
	@Bean 
	public JavaMailSender mailSender(){
//		Properties prop = new Properties();
//		prop.put("mail.transport.protocol", "smtp");
//
//		prop.put("mail.smtp.auth", "true");
//
//		prop.put("mail.smtp.starttls.enable", "true");
//
//		prop.put("mail.debug", "true");
		
		
		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
		//javaMailSender.setHost("smtp-mail.outlook.com");
		javaMailSender.setHost(smtpHost());
		javaMailSender.setPort(smtpPort());
		//javaMailSender.setPort(587);
		//javaMailSender.setUsername("");
		//javaMailSender.setPassword("");
		//javaMailSender.setJavaMailProperties(prop);
		
		return javaMailSender;
	}

}
