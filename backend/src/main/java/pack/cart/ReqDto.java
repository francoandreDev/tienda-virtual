package pack.cart;

import java.util.Set;

public class ReqDto {
	private Long accountId;
	private Set<Long> ordersId;

	public ReqDto() {
	}

	public ReqDto(Long accountId, Set<Long> ordersId) {
		this.accountId = accountId;
		this.ordersId = ordersId;
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
