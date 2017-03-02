package Mock;

import static org.junit.Assert.*;
import org.junit.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class GeoTest {

	@Test
	public void testReck() {
		Recktangle reck1 = new Recktangle();
		assertEquals(reck1.surface(2, 2), 4);
		assertEquals(reck1.perimeter(2, 2), 8);
	}

	@Test
	public void testCirc() {
		Circle circ1 = new Circle();
		assertEquals(circ1.surface(2, 0), 12);
		assertEquals(circ1.perimeter(2, 0), 12);
	}

	@Test
	public void testStub() {
		StubRecktangle stubreck1 = new StubRecktangle();
		assertEquals(stubreck1.surface(2, 2), 21);
		assertEquals(stubreck1.perimeter(2, 2), 21);
	}

	@Test
	public void testMock() {
		CalculatorInterface mockinator = mock(CalculatorInterface.class);
		GeoApp geoApp = new GeoApp(mockinator);
		when(mockinator.perimeter(2, 2)).thenReturn(8);
		assertEquals(8, geoApp.Perimeter());

	}

}
