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

package service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

/**
 * @author Sam Brannen
 */
public class MessageFormatterTests {

	@Test
	public void consoleFormatter() {
		MessageFormatter formatter = new ConsoleMessageFormatter();
		assertThat(formatter.format("Test")).isEqualTo("Test!");
	}

	@Test
	public void htmlFormatter() {
		MessageFormatter formatter = new HtmlMessageFormatter();
		assertThat(formatter.format("Test")).isEqualTo("<strong>Test</strong>");
	}

	@Test
	public void upperCaseFormatter() {
		MessageFormatter formatter = new UpperCaseMessageFormatter();
		assertThat(formatter.format("Test")).isEqualTo("TEST");
	}

	@Test
	public void trimmingFormatter() {
		MessageFormatter formatter = new TrimmingMessageFormatter();
		assertThat(formatter.format("  Test  ")).isEqualTo("Test");
	}

	@Test
	public void compositeFormatter() {
		// @formatter:off
		List<MessageFormatter> formatters = Arrays.asList(
			new TrimmingMessageFormatter(),
			new UpperCaseMessageFormatter(),
			new HtmlMessageFormatter()
		);
		// @formatter:on

		MessageFormatter formatter = new CompositeMessageFormatter(formatters);

		assertThat(formatter.format("  Test  ")).isEqualTo("<strong>TEST</strong>");
	}

}
