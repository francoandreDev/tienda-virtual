package pack.order;

import java.util.Set;

public class ResDto {
	private Long id;
    private Long cartId;
    private Long productId;
    private Set<Long> paymentsId;
    private int quantity;
    
	public ResDto() {
	}

	public ResDto(Long id, Long cartId, Long productId, Set<Long> paymentsId, int quantity) {
		this.id = id;
		this.cartId = cartId;
		this.productId = productId;
		this.paymentsId = paymentsId;
		this.quantity = quantity;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCartId() {
		return cartId;
	}

	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public Set<Long> getPaymentsId() {
		return paymentsId;
	}

	public void setPaymentsId(Set<Long> paymentsId) {
		this.paymentsId = paymentsId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}
