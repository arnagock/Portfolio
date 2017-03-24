package Node;

public class Stack<T> {
	private Node<T> top = null;

	public Stack() {
		this.top = null;
	}

	public void push(T data) {
		Node<T> node = new Node<T>(data, top);
		this.top = node;
	}

	public Node<T> pop() {
		if (top != null) {
			Node<T> print = (Node<T>) this.top;
			this.top = top.getNext();
			return print;
		} else {
			return null;
		}

	}

	public Node<T> peek() {
		if (top != null) {
			return top;
		}
		return null;
	}

	public int size() {
		int counter = 0;
		Node<T> current = this.top;
		while (!current.equals(null)) {
			counter++;
			current = current.getNext();

		}
		return counter;
	}

	public boolean isEmpty() {
		if (this.top == null) {
			return true;
		} else {
			return false;
		}
	}

}
