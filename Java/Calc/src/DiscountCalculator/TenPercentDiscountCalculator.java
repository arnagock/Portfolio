package DiscountCalculator;

public class TenPercentDiscountCalculator implements DiscountCal {
	public double calculateDiscountedPrice(double price) {
		return 0.9 * price;

	}
}
