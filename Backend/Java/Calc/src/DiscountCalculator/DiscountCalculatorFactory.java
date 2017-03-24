package DiscountCalculator;

public class DiscountCalculatorFactory {

	public static DiscountCal getDiscountCalculatorFor(java.time.DayOfWeek day) {

		if (day == java.time.DayOfWeek.SUNDAY || day == java.time.DayOfWeek.SATURDAY) {
			return new TenPercentDiscountCalculator();
		} else {

			return new ZeroDiscountCalculator();
		}
	}
}
