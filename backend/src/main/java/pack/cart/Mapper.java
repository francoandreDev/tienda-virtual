package pack.cart;

import java.util.Set;
import java.util.stream.Collectors;

public class Mapper {
	public static ResDto toResDto(CartModel model) {
		if (model == null) {
			return null;
		}
		
		Set<Long> orderIds = model.getOrders().stream()
            .map(order -> order.getId())
            .collect(Collectors.toSet());
		
		return new ResDto(
			model.getId(),
			model.getAccount().getId(),
			orderIds
		);
	}
	
	public static CartModel toEntity(ReqDto reqDto, pack.account.AccountModel secondaryModel, Set<pack.order.OrderModel> tertiaryModel) {
		if (reqDto == null || secondaryModel == null || tertiaryModel == null) {
			return null;
		}
		
		return new CartModel(
			null, // El ID se genera automáticamente, por lo que se pasa como `null`
			secondaryModel,
			tertiaryModel
		);
	}
}

