package pack.card;

public class ResDto {
	private Long id;
	private Long accountId;
	private double balance;
    private String name;
    private String type;

    public ResDto() {
    }

	public ResDto(Long id, Long accountId, double balance, String name, String type) {
		this.id = id;
		this.accountId = accountId;
		this.balance = balance;
		this.name = name;
		this.type = type;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
