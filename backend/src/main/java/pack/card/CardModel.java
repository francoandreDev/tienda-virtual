package pack.card;

import jakarta.persistence.*;
import pack.account.AccountModel;

@Entity
@Table(name = "cards")
public class CardModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    private pack.account.AccountModel account;

    @Column(name = "card_balance", columnDefinition = "double precision check(card_balance >= 0.00)")
    private double balance;

    @Column(name = "card_name", nullable = false, length = 100)
    private String name;

    @Column(name = "card_type", nullable = false, length = 7)
    private String type;

	public CardModel() {
	}

	public CardModel(Long id, AccountModel account, double balance, String name, String type) {
		this.id = id;
		this.account = account;
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

	public AccountModel getAccount() {
		return account;
	}

	public void setAccount(AccountModel account) {
		this.account = account;
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
