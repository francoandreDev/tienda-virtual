package pack.category;

import java.util.Set;

public class ReqDto {
	private Set<Long> productIds;
    private String name;
    
	public ReqDto() {
	}
	
	public ReqDto(Set<Long> productIds, String name) {
		this.productIds = productIds;
		this.name = name;
	}
	
	public Set<Long> getProductIds() {
		return productIds;
	}
	
	public void setProductIds(Set<Long> productIds) {
		this.productIds = productIds;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
