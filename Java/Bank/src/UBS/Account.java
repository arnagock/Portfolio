package UBS;

public class Account {

	private final String id = java.util.UUID.randomUUID().toString();
	private double balance;
	private final BankCustomer customer;

	public Account(double balance, BankCustomer customer) {
		this.balance = balance;
		this.customer = customer;
	}

	public void withdraw(double amount) {
		this.balance = this.balance - amount;
	}

	public void deposite(double amount) {
		this.balance = this.balance + amount;
	}

	public String getId() {
		return id;
	}

	public BankCustomer getCustomer() {
		return customer;
	}

	public double getBalance() {
		return balance;
	}

}
