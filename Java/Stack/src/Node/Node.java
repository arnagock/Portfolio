package Node;

public class Node<T> {
	private final T data;
	private Node<T> next;

	public Node<T> getNext() {
		if (next.equals(null)) {
			return null;
		}
		return next;
	}

	public Node(T data, Node<T> next) {
		this.data = data;
		this.next = next;
	}

	public T getData() {
		return data;
	}

}
