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

package twitter.util;

import org.h2.tools.Server;

/**
 * @author Sam Brannen
 */
public class H2Server {

	public static void main(String[] args) throws Exception {

		// int port = SocketUtils.findAvailableTcpPort();
		// System.out.println("Starting H2 database server on port: " + port);
		// String[] h2Arguments = new String[] { "-tcp", "-tcpAllowOthers", "-tcpPort", "" + port };

		String[] h2Arguments = new String[] { "-tcp", "-tcpAllowOthers" };
		Server server = Server.createTcpServer(h2Arguments).start();

		System.out.println("Driver: " + org.h2.Driver.class.getName());
		System.out.println("URL:    " + server.getURL());

		// JDBC driver class: org.h2.Driver
		// Database URL: jdbc:h2:tcp://localhost/~/h2_pa

		System.out.println();
		System.out.println("Press enter to stop the H2 database server...");
		System.in.read();

		server.stop();
	}

}
