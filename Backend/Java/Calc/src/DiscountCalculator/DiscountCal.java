package DiscountCalculator;

public interface DiscountCal {

	default double calculateDiscountedPrice(double price) {
		return price;
	}

}
