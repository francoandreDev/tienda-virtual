package pack.account;

import jakarta.persistence.*;

@Entity
@Table(name = "accounts")
public class AccountModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;
    
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private pack.card.CardModel card;

    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private pack.cart.CartModel cart;

    @Column(name = "account_username", nullable = false, unique = true, length = 50)
    private String username;

    @Column(name = "account_password", nullable = false, length = 255)
    private String password;

	public AccountModel() {
	}

	public AccountModel(Long id, pack.card.CardModel card, pack.cart.CartModel cart, String username, String password) {
		this.id = id;
		this.card = card;
		this.cart = cart;
		this.username = username;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public pack.card.CardModel getCard() {
		return card;
	}

	public void setCard(pack.card.CardModel card) {
		this.card = card;
	}

	public pack.cart.CartModel getCart() {
		return cart;
	}

	public void setCart(pack.cart.CartModel cart) {
		this.cart = cart;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
