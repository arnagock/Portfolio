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

package twitter.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Profile;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.util.SocketUtils;
import org.subethamail.wiser.Wiser;


@Configuration
@Profile("dev")


public class TestMailConfig {



	@Bean 

	public int smtpPort() {

		return SocketUtils.findAvailableTcpPort();

	}



	@Bean

	public String smtpHost() {

		return "localhost";

	}



	@Bean

	public JavaMailSender mailSender() {

		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

		javaMailSender.setHost(smtpHost());

		javaMailSender.setPort(smtpPort());

		return javaMailSender;

	}



	@Bean(initMethod = "start", destroyMethod = "stop")

	public Wiser wiser(String smtpHost) {

		Wiser wiser = new Wiser(smtpPort());

		wiser.setHostname(smtpHost);

		return wiser;

	}
}
