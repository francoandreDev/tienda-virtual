package pack.order;

import java.util.Set;

public class ReqDto {
	private Long cartId;
    private Long productId;
    private Set<Long> paymentsId;
    private int quantity;
	public ReqDto() {
	}
	public ReqDto(Long cartId, Long productId, Set<Long> paymentsId, int quantity) {
		this.cartId = cartId;
		this.productId = productId;
		this.paymentsId = paymentsId;
		this.quantity = quantity;
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
