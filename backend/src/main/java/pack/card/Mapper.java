package pack.card;

public class Mapper {
	public static ResDto toResDto(CardModel model) {
		if (model == null) {
			return null;
		}
		
		return new ResDto(
			model.getId(),
			model.getAccount().getId(),
			model.getBalance(),
			model.getName(),
			model.getType()
		);
	}
	
	public static CardModel toEntity(ReqDto reqDto, pack.account.AccountModel secondaryModel) {
		if (reqDto == null || secondaryModel == null) {
			return null;
		}
		
		return new CardModel(
			null, // El ID se genera automáticamente, por lo que se pasa como `null`
			secondaryModel,
			reqDto.getBalance(),
			reqDto.getName(),
			reqDto.getType()
		);
	}
}
