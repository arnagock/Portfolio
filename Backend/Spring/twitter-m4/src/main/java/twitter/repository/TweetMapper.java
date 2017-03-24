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

package twitter.repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import twitter.domain.Tweet;

/**
 * Custom JDBC {@link RowMapper} for {@link Tweet}.
 *
 * <p>Note: this mapper is stateless and can be reused within
 * an application.
 *
 * @author Sam Brannen
 */
class TweetMapper implements RowMapper<Tweet> {

	@Override
	public Tweet mapRow(ResultSet rs, int rowNum) throws SQLException {
		return new Tweet(rs.getInt("id"), rs.getString("author"), rs.getString("text"));
	}

}
