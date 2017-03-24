package Mock;

import Mock.CalculatorInterface;

public class Recktangle implements CalculatorInterface {

	@Override
	public int surface(int a, int b) {
		return (a * b);
	}

	@Override
	public int perimeter(int a, int b) {
		return (2 * a + 2 * b);
	}

}
