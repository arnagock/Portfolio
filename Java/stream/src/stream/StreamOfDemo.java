package stream;

import java.util.OptionalDouble;
import java.util.OptionalInt;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class StreamOfDemo {

	public static void main(String[] args) {
		Stream.of("hi", "W", "lol").count();
		Stream.of("hi", "W", "lol").forEach(System.out::println);

		IntStream la = IntStream.of(1, 2, 3, 4, 5, 6, 7, 8, 9);

		/*
		 * System.out.println(la.summaryStatistics()); int sum = la.sum();
		 * OptionalInt max = la.max(); OptionalInt min = la.min();
		 * OptionalDouble average = la.average(); long count = la.count();
		 */

	}

}
