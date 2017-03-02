package DiscountCalculator;

public class PricingService {
	private final DateService service;

	public PricingService(DateService service) {
		this.service = service;
	}

	public double calculatePrice(double quantity, double amount) {
		double basePrice = quantity * amount;
		DiscountCal discount = DiscountCalculatorFactory.getDiscountCalculatorFor(service.getDayOfWeek());
		return discount.calculateDiscountedPrice(basePrice);
	}

}
