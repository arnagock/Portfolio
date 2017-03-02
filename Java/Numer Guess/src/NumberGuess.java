import java.util.Random;
import java.util.Scanner;

public class NumberGuess {
	static Scanner scanner = new Scanner(System.in);
	static Random random = new Random(System.currentTimeMillis());
	static int randomRoll = random.nextInt(10) + 1;
	static int guessCount = 0;

	public static void main(String[] args) {

		System.out.println("I'am thinking of a random number from 1 to 10.");
		while (true) {

			System.out.println("Guess what it is:");
			int guess = scanner.nextInt();
			if (randomRoll == guess) {
				guessCount += 1;
				System.out.println("Congratulations! You hit it!!! You needed " + guessCount + " trys");
				System.exit(0);
				return;
			} else {
				guessCount += 1;
				if (guess > randomRoll) {
					System.out.println("lol Nope. Get them numbers DOWN!!!");
				} else {
					System.out.println("lol Nope. Get them numbers UP!!!");
				}
			}
		}

	}

}
