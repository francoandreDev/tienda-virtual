package pack.order;

import java.util.Set;
import java.util.stream.Collectors;

public class Mapper {
	public static ResDto toResDto(OrderModel model) {
		if (model == null) {
			return null;
		}
		
		Set<Long> paymentsIds = model.getPayments().stream()
	            .map(entity -> entity.getId())
	            .collect(Collectors.toSet());
		
		return new ResDto(
			model.getId(),
			model.getCart().getId(),
			model.getProduct().getId(),
			paymentsIds,
			model.getQuantity()
		);
	}
	
	public static OrderModel toEntity(ReqDto reqDto, pack.cart.CartModel secondaryModel, pack.product.ProductModel tertiaryModel, Set<pack.pay.PayModel> quaternaryModel) {
		if (reqDto == null || secondaryModel == null) {
			return null;
		}
		
		return new OrderModel(
			null, // El ID se genera automáticamente, por lo que se pasa como `null`
			secondaryModel,
			tertiaryModel,
			quaternaryModel,
			reqDto.getQuantity()
		);
	}
}
