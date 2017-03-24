package Mock;

public class Circle implements CalculatorInterface {

	@Override
	public int surface(int a, int b) {
		return ((a * a) * 3);// Math.PI);

	}

	@Override
	public int perimeter(int a, int b) {
		return (2 * a * 3);// Math.PI));

	}

}
