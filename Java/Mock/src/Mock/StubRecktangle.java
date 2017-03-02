package Mock;

import Mock.CalculatorInterface;

public class StubRecktangle implements CalculatorInterface {

	@Override
	public int surface(int a, int b) {
		return 21;

	}

	@Override
	public int perimeter(int a, int b) {
		return 21;

	}

}
