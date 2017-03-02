package Twitter;

import java.util.Scanner;
import Twitter.TweetService;

public class TweetApp {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		while (true) {
			System.out.println("Type a Tweet or type functions to see the functions");
			String text = scanner.next();

			if (text.equals("functions")) {
				System.out.println("Options: ");
				System.out.println("add -> Default");
				System.out.println("delete");
				System.out.println("list");

			} else if (text.equals("delete")) {

			} else if (text.equals("list")) {
				TweetService.findAll();
			} else {
				Tweet tweet = new Tweet(text);
				TweetService.save(tweet);
				// Tweet tweet+i = new Tweet(tweetText);
			}

		}

	}

}
