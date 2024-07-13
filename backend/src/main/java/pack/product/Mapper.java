package pack.product;

import java.util.Set;
import java.util.stream.Collectors;

public class Mapper {
	public static ResDto toResDto(ProductModel model) {
		if (model == null) {
			return null;
		}
		
		Set<Long> secondaryIds = model.getCategories().stream()
	            .map(entity -> entity.getId())
	            .collect(Collectors.toSet());
		
		Set<Long> tertiaryIds = model.getImages().stream()
	            .map(entity -> entity.getId())
	            .collect(Collectors.toSet());
		
		return new ResDto(
				model.getId(),
				secondaryIds,
				tertiaryIds,
				model.getName(),
				model.getStock(),
				model.getDiscount()
				);
	}
	
	public static ProductModel toEntity(ReqDto reqDto, Set<pack.category.CategoryModel> secondaryModel, Set<pack.image.ImageModel> tertiaryModel) {
		if (reqDto == null || secondaryModel == null || tertiaryModel == null) {
			return null;
		}
		
		return new ProductModel(
			null, // El ID se genera automáticamente, por lo que se pasa como `null`
			secondaryModel,
			tertiaryModel,
			reqDto.getName(),
			reqDto.getStock(),
			reqDto.getDiscount()
		);
	}
}

