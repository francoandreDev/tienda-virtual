package pack.history;

import jakarta.persistence.*;

@Entity
@Table(name = "histories")
public class HistoryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "history_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "history_order", nullable = false)
    private pack.order.OrderModel order;

    public HistoryModel() {
    }

    public HistoryModel(Long id, pack.order.OrderModel order) {
        this.id = id;
        this.order = order;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public pack.order.OrderModel getOrder() {
        return order;
    }

    public void setOrder(pack.order.OrderModel order) {
        this.order = order;
    }
}
