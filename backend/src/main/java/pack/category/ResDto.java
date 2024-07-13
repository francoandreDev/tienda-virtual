package pack.category;

import java.util.Set;

public class ResDto {
    private Long id;
    private Set<Long> productIds;
    private String name;
    
	public ResDto() {
	}

	public ResDto(Long id, Set<Long> productIds, String name) {
		this.id = id;
		this.productIds = productIds;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
