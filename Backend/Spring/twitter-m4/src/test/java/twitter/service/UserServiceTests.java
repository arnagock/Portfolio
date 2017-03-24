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

import static java.util.Arrays.asList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.Test;

import twitter.repository.TweetRepository;

/**
 * Unit tests for the {@link DefaultUserService}.
 *
 * @author Sam Brannen
 */
public class UserServiceTests {

	@Test
	public void findAllUsernames() {
		// Given
		TweetRepository tweetRepository = mock(TweetRepository.class);
		UserService userService = new DefaultUserService(tweetRepository);

		// When
		List<String> demoUsernames = asList("luke", "leia", "han", "yoda");
		when(tweetRepository.findAllUsernames()).thenReturn(demoUsernames);

		// Then
		List<String> usernames = userService.findAllUsernames();
		assertThat(usernames).isEqualTo(demoUsernames);
	}

}
