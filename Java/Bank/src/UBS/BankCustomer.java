package UBS;

public class BankCustomer {
	private final String id = java.util.UUID.randomUUID().toString();
	private final String name;
	private double balance;
	private Account account;

	public BankCustomer(String name, double balance) {
		this.name = name;
		this.balance = balance;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public double getBalance() {
		return balance;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public double setBalance() {
		this.account.getBalance();
		return this.account.getBalance();
	}

}
