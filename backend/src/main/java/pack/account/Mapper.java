package pack.account;

public class Mapper {
	public static ResDto toResDto(AccountModel model) {
		if (model == null) {
			return null;
		}
		
		return new ResDto(
			model.getId(),
			model.getCard().getId(),
			model.getCart().getId(),
			model.getUsername(),
			model.getPassword()
		);
	}
	
	public static AccountModel toEntity(ReqDto reqDto, pack.card.CardModel secondaryModel, pack.cart.CartModel tertiaryModel) {
		if (reqDto == null || secondaryModel == null || tertiaryModel == null) {
			return null;
		}
		
		return new AccountModel(
				null, // El ID se genera automáticamente, por lo que se pasa como `null`
				secondaryModel,
				tertiaryModel,
				reqDto.getUsername(),
				reqDto.getPassword()
		);
	}
}

