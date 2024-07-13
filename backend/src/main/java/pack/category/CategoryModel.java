package pack.category;

import java.util.Set;
import jakarta.persistence.*;
import pack.product.ProductModel;

@Entity
@Table(name = "categories")
public class CategoryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long id;
    
    @ManyToMany(mappedBy = "categories")
    private Set<ProductModel> products;

    @Column(name = "category_name", nullable = false, length = 100, unique = true)
    private String name;

	public CategoryModel() {
	}

	public CategoryModel(Long id, Set<ProductModel> products, String name) {
		this.id = id;
		this.products = products;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Set<ProductModel> getProducts() {
		return products;
	}

	public void setProducts(Set<ProductModel> products) {
		this.products = products;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
