package pack.account;

public class ResDto {
	private Long id;
	private Long cardId;
	private Long cartId;
	private String username;
    private String password;
    
	public ResDto() {
	}

	public ResDto(Long id, Long cardId, Long cartId, String username, String password) {
		this.id = id;
		this.cardId = cardId;
		this.cartId = cartId;
		this.username = username;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCardId() {
		return cardId;
	}

	public void setCardId(Long cardId) {
		this.cardId = cardId;
	}

	public Long getCartId() {
		return cartId;
	}

	public void setCartId(Long cartId) {
		this.cartId = cartId;
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
