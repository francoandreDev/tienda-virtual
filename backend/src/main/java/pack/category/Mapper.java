package pack.category;

import java.util.Set;
import java.util.stream.Collectors;

public class Mapper {
	public static ResDto toResDto(CategoryModel model) {
		if (model == null) {
			return null;
		}
		
		Set<Long> productIds = model.getProducts().stream()
	            .map(product -> product.getId())
	            .collect(Collectors.toSet());
		
		return new ResDto(
			model.getId(),
			productIds,
			model.getName()
		);
	}
	
	public static CategoryModel toEntity(ReqDto reqDto, Set<pack.product.ProductModel> secondaryModel) {
		if (reqDto == null || secondaryModel == null) {
			return null;
		}
		
		return new CategoryModel(
			null, // El ID se genera automáticamente, por lo que se pasa como `null`
			secondaryModel,
			reqDto.getName()
		);
	}
}

