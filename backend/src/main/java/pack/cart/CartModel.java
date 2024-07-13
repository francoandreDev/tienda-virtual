package pack.cart;

import java.util.Set;

import jakarta.persistence.*;
import pack.order.OrderModel;

@Entity
@Table(name = "carts")
public class CartModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    private pack.account.AccountModel account;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    private Set<OrderModel> orders;

    public CartModel() {
    }

    public CartModel(Long id, pack.account.AccountModel account, Set<pack.order.OrderModel> orders) {
        this.id = id;
        this.account = account;
        this.orders = orders;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public pack.account.AccountModel getAccount() {
        return account;
    }

    public void setAccount(pack.account.AccountModel account) {
        this.account = account;
    }

    public Set<pack.order.OrderModel> getOrders() {
        return orders;
    }

    public void setOrders(Set<pack.order.OrderModel> orders) {
        this.orders = orders;
    }
}
