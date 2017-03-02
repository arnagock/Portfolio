package DiscountCalculator;

public class ZeroDiscountCalculator implements DiscountCal {

	public double calculateDiscountedPrice(double price) {
		return price;
	}
}
