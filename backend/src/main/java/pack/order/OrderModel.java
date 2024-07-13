package pack.order;

import java.util.Set;

import jakarta.persistence.*;
import pack.cart.CartModel;
import pack.pay.PayModel;
import pack.product.ProductModel;

@Entity
@Table(name = "orders")
public class OrderModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = false)
    private pack.cart.CartModel cart;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private Set<PayModel> payments;

    @ManyToOne
    @JoinColumn(name = "order_product", nullable = false)
    private ProductModel product;

    @Column(name = "order_quantity", nullable = false)
    private int quantity;

    public OrderModel() {
    }
    
    public OrderModel(Long id, CartModel cart, ProductModel product, Set<PayModel> payments,
			int quantity) {
		this.id = id;
		this.cart = cart;
		this.product = product;
		this.payments = payments;
		this.quantity = quantity;
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CartModel getCart() {
        return cart;
    }

    public void setCart(CartModel cart) {
        this.cart = cart;
    }

    public ProductModel getProduct() {
        return product;
    }

    public void setProduct(ProductModel product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Set<PayModel> getPayments() {
        return payments;
    }

    public void setPayments(Set<PayModel> payments) {
        this.payments = payments;
    }
}
