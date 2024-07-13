package pack.pay;

import jakarta.persistence.*;
import pack.order.OrderModel;

@Entity
@Table(name = "pays")
public class PayModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private OrderModel order;

	public PayModel() {
	}

	public PayModel(Long id, OrderModel order) {
		this.id = id;
		this.order = order;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public OrderModel getOrder() {
		return order;
	}

	public void setOrder(OrderModel order) {
		this.order = order;
	}
}
