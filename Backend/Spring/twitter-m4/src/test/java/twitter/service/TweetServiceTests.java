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

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.subethamail.wiser.Wiser;

import twitter.config.TestMailConfig;
import twitter.config.TestRepositoryConfig;
import twitter.domain.Tweet;
import twitter.repository.TweetRepository;

/**
 * Integration tests for the {@link DefaultTweetService}.
 *
 * @author Sam Brannen
 */
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = { DefaultTweetService.class, TestRepositoryConfig.class, TestMailConfig.class })
@ActiveProfiles("dev")

public class TweetServiceTests {

	@Autowired
	TweetService tweetService;

	@Autowired
	TweetRepository tweetRepository;

	@Autowired
	Wiser wiser;

	@Test
	public void save() throws Exception {
		// Given
		Tweet tweet = new Tweet("jsmith", "Hello, Twitter!");
		assertThat(wiser.getMessages()).hasSize(0);

		// When
		tweetService.save(tweet);

		// Then
		verify(tweetRepository).save(tweet);

		assertThat(wiser.getMessages()).hasSize(1);

		MimeMessage mimeMessage = wiser.getMessages().get(0).getMimeMessage();
		String from = mimeMessage.getFrom()[0].toString();
		String to = mimeMessage.getRecipients(RecipientType.TO)[0].toString();
		String subject = mimeMessage.getSubject();
		String body = mimeMessage.getContent().toString().trim();

		assertThat(from).isEqualTo("no-reply@example.org");
		assertThat(to).isEqualTo("jsmith@example.org");
		assertThat(subject).isEqualTo("New tweet posted");
		assertThat(body).contains("Dear jsmith", "Your tweet with the following text has been posted.",
			"Hello, Twitter!");

		wiser.getMessages().clear();
	}

	@Test
	public void deleteById() {
		// Given
		Integer id = 42;

		// When
		tweetService.deleteById(id);

		// Then
		verify(tweetRepository).deleteById(id);
	}

	@Test
	public void findById() {
		// Given
		Integer id = 42;
		Tweet tweet = new Tweet(id, "jsmith", "Hello, Twitter!");

		// When
		when(tweetRepository.findById(id)).thenReturn(tweet);
		Tweet tweetFound = tweetService.findById(id);

		// Then
		assertThat(tweetFound).isEqualTo(tweet);
	}

	@Test
	public void findAll() {
		// When
		tweetService.findAll();

		// Then
		verify(tweetRepository).findAll();
	}

	@Test
	public void findAllByUsername() {
		// Given
		String username = "jsmith";

		// When
		tweetService.findAllByUsername(username);

		// Then
		verify(tweetRepository).findAllByUsername(username);
	}

	@Test
	public void findAllContainingHashTag() {
		// Given
		String hashTag = "spring";

		// When
		tweetService.findAllContainingHashTag(hashTag);

		// Then
		verify(tweetRepository).findAllContaining("#" + hashTag);
	}

	@Test
	public void findAllMentioningUsername() {
		// Given
		String handle = "SpringFramework";

		// When
		tweetService.findAllMentioningUsername(handle);

		// Then
		verify(tweetRepository).findAllContaining("@" + handle);
	}

}
