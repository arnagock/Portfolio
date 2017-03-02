package Runnable;

public class MyRunnable implements Runnable {

	@Override
	public void run() {
		System.out.println("I’m running in a different thread: " + Thread.currentThread().getName());

	}

}
