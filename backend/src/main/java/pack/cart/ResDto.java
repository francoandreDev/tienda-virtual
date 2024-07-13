package pack.cart;

import java.util.Set;

public class ResDto {
	private Long id;
    private Long accountId;
    private Set<Long> ordersId;
    
	public ResDto() {
	}
	
	public ResDto(Long id, Long accountId, Set<Long> ordersId) {
		this.id = id;
		this.accountId = accountId;
		this.ordersId = ordersId;
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

	public Set<Long> getOrdersId() {
		return ordersId;
	}

	public void setOrdersId(Set<Long> ordersId) {
		this.ordersId = ordersId;
	}
}
