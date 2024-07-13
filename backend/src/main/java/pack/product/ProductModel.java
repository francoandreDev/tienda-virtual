package pack.product;

import jakarta.persistence.*;
import pack.category.CategoryModel;
import pack.image.ImageModel;

import java.util.Set;

@Entity
@Table(name = "products")
public class ProductModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ImageModel> images;
    
    @ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
    @JoinTable(name = "product_categories",
               joinColumns = @JoinColumn(name = "product_id"),
               inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<pack.category.CategoryModel> categories;

    @Column(name = "product_name", nullable = false, length = 100)
    private String name;

    @Column(name = "product_stock", nullable = false, columnDefinition = "int check(product_stock >= 0)")
    private int stock;

    @Column(name = "product_discount", columnDefinition = "double precision check(product_discount >= 0 and product_discount < 1)")
    private double discount;

	public ProductModel() {
	}

	public ProductModel(Long id, Set<CategoryModel> categories, Set<ImageModel> images, String name, int stock,
			Double discount) {
		this.id = id;
		this.categories = categories;
		this.images = images;
		this.name = name;
		this.stock = stock;
		this.discount = discount;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Set<CategoryModel> getCategories() {
		return categories;
	}

	public void setCategories(Set<CategoryModel> categories) {
		this.categories = categories;
	}

	public Set<ImageModel> getImages() {
		return images;
	}

	public void setImages(Set<ImageModel> images) {
		this.images = images;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}
}
