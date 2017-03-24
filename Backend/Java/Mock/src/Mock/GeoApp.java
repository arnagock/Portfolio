package Mock;

public class GeoApp {

	private final CalculatorInterface GeoObject;

	public GeoApp(CalculatorInterface GeoObject) {

		this.GeoObject = GeoObject;

	}

	public int Perimeter() {

		return this.GeoObject.perimeter(2, 2);

	}

}