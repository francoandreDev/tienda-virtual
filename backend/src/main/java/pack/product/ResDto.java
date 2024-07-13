package pack.product;

import java.util.Set;

public class ResDto {
    private Long id;
    private Set<Long> categoriesId;
    private Set<Long> imagesId;
    private String name;
    private int stock;
    private Double discount;
	public ResDto() {
	}
	public ResDto(Long id, Set<Long> categoriesId, Set<Long> imagesId, String name, int stock, Double discount) {
		this.id = id;
		this.categoriesId = categoriesId;
		this.imagesId = imagesId;
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
	public Set<Long> getCategoriesId() {
		return categoriesId;
	}
	public void setCategoriesId(Set<Long> categoriesId) {
		this.categoriesId = categoriesId;
	}
	public Set<Long> getImagesId() {
		return imagesId;
	}
	public void setImagesId(Set<Long> imagesId) {
		this.imagesId = imagesId;
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
