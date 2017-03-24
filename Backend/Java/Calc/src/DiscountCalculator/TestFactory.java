package DiscountCalculator;

import static org.junit.Assert.*;

import org.junit.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class TestFactory {

	@Test
	public void testFactory() {
		DiscountCal factory1 = DiscountCalculatorFactory.getDiscountCalculatorFor(java.time.DayOfWeek.SATURDAY);
		DiscountCal factory2 = DiscountCalculatorFactory.getDiscountCalculatorFor(java.time.DayOfWeek.SUNDAY);
		DiscountCal factory3 = DiscountCalculatorFactory.getDiscountCalculatorFor(java.time.DayOfWeek.MONDAY);
		DiscountCal factory4 = DiscountCalculatorFactory.getDiscountCalculatorFor(java.time.DayOfWeek.WEDNESDAY);

		DiscountCal result1 = new ZeroDiscountCalculator();
		DiscountCal result2 = new TenPercentDiscountCalculator();

		assertSame(result2.getClass(), factory1.getClass());
		assertEquals(result2.getClass(), factory2.getClass());
		assertEquals(result1.getClass(), factory3.getClass());
		assertEquals(result1.getClass(), factory4.getClass());
	}

	@Test
	public <A> void testPricingService() {
		DateService mockinator = mock(DateService.class);
		PricingService service = new PricingService(mockinator);

		Mockito.when(mockinator.getDayOfWeek()).thenReturn(java.time.DayOfWeek.SATURDAY);
		assertEquals(90, service.calculatePrice(10, 10), 0.01);

		Mockito.when(mockinator.getDayOfWeek()).thenReturn(java.time.DayOfWeek.SUNDAY);
		assertEquals(90, service.calculatePrice(10, 10), 0.01);

		Mockito.when(mockinator.getDayOfWeek()).thenReturn(java.time.DayOfWeek.MONDAY);
		assertEquals(100, service.calculatePrice(10, 10), 0.01);

		Mockito.when(mockinator.getDayOfWeek()).thenReturn(java.time.DayOfWeek.TUESDAY);
		assertEquals(100, service.calculatePrice(10, 10), 0.01);

		Mockito.when(mockinator.getDayOfWeek()).thenReturn(java.time.DayOfWeek.WEDNESDAY);
		assertEquals(100, service.calculatePrice(10, 10), 0.01);

		Mockito.when(mockinator.getDayOfWeek()).thenReturn(java.time.DayOfWeek.THURSDAY);
		assertEquals(100, service.calculatePrice(10, 10), 0.01);

		Mockito.when(mockinator.getDayOfWeek()).thenReturn(java.time.DayOfWeek.FRIDAY);
		assertEquals(100, service.calculatePrice(10, 10), 0.01);
	}
}
