package pack.pay;

public class Mapper {
	public static ResDto toResDto(PayModel model) {
		if (model == null) {
			return null;
		}
		
		return new ResDto(
			model.getId(),
			model.getOrder().getId()
		);
	}
	
	public static PayModel toEntity(ReqDto reqDto, pack.order.OrderModel secondaryModel) {
		if (reqDto == null || secondaryModel == null) {
			return null;
		}
		
		return new PayModel(
			null, // El ID se genera automáticamente, por lo que se pasa como `null`
			secondaryModel
		);
	}
}

