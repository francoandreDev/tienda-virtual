package pack.product;

import java.util.Set;

public class ReqDto {
	private Set<Long> categoriesId;
    private Set<Long> imagesId;
    private String name;
    private int stock;
    private Double discount;
	public ReqDto() {
	}
	public ReqDto(Set<Long> categoriesId, Set<Long> imagesId, String name, int stock, Double discount) {
		this.categoriesId = categoriesId;
		this.imagesId = imagesId;
		this.name = name;
		this.stock = stock;
		this.discount = discount;
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
