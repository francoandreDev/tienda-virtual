package pack.image;

import jakarta.persistence.*;
import pack.product.ProductModel;

@Entity
@Table(name = "images")
public class ImageModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private ProductModel product;

    @Column(name = "image_url", length = 255)
    private String url;

    @Column(name = "image_name", nullable = false, length = 100)
    private String name;

    @Lob
    @Column(name = "image_data")
    private byte[] data;

	public ImageModel() {
	}

	public ImageModel(Long id, String url, String name, byte[] data, ProductModel product) {
		this.id = id;
		this.url = url;
		this.name = name;
		this.data = data;
		this.product = product;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public ProductModel getProduct() {
		return product;
	}

	public void setProduct(ProductModel product) {
		this.product = product;
	}
}
