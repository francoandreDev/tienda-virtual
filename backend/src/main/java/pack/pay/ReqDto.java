package pack.pay;

public class ReqDto {
	public Long orderId;

	public ReqDto() {
	}

	public ReqDto(Long orderId) {
		this.orderId = orderId;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
}
