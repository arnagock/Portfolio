package UBS;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

public class BankService {
	private static Map<String, BankCustomer> databaseCustomer = new LinkedHashMap<>();
	private static Map<String, Account> databaseAccount = new LinkedHashMap<>();

	public void save(BankCustomer customer) {
		databaseCustomer.put(customer.getId(), customer);
	}

	public void credit(BankCustomer customer, double amount) {
		customer.getAccount().withdraw(amount);
	}

	public void debit(BankCustomer customer, double amount) {
		customer.getAccount().deposite(amount);
	}

	public void delete(String id) {
		databaseCustomer.remove(id);
	}

	public void update() {
		ArrayList<BankCustomer> list = findAllCustomers();
		for (int i = 0; i < list.size(); i++) {
			list.get(i).setBalance();
		}
	}

	public Account findAccountById(String id) {
		return databaseAccount.get(id);
	}

	public BankCustomer findCustomerById(String id) {
		return databaseCustomer.get(id);
	}

	public ArrayList<Account> findAllAccounts() {
		return new ArrayList<>(databaseAccount.values());
	}

	public ArrayList<BankCustomer> findAllCustomers() {
		return new ArrayList<>(databaseCustomer.values());
	}

}
