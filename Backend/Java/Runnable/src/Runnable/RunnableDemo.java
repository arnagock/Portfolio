package Runnable;

public class RunnableDemo {

	public static void main(String[] args) {
		// normal class call
		new Thread(new MyRunnable()).start();
		// inner anonymous class
		new Thread(() -> {
			System.out.println("I'm running in thread: " + " " + Thread.currentThread().getName());
		}).start();
		// lambda just for one liners
		new Thread(() -> {
		}).start();
		new Thread(() -> System.out.println("I'm running in thread: " + Thread.currentThread().getName())).start();

	}

}
