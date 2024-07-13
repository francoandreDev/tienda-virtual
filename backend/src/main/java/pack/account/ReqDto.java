package pack.account;

public class ReqDto {
	private Long cardId;
	private Long cartId;
	private String username;
    private String password;
    
	public ReqDto() {
	}

	public ReqDto(Long cardId, Long cartId, String username, String password) {
		this.cardId = cardId;
		this.cartId = cartId;
		this.username = username;
		this.password = password;
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
