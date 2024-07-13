package pack.user;

public class Mapper {
	public static ResDto toResDto(UserModel model) {
		if (model == null) {
            return null;
        }
		
		return new ResDto(
			model.getId(),
			model.getAccount().getId(),
			model.getBirth(),
			model.getGender(),
			model.getRole(),
            model.getFullname(),
            model.getPhoneNumber(),
            model.getAddress(),
            model.getCity(),
            model.getCountry(),
            model.isStatus()
		);
	}

	public static UserModel toEntity(ReqDto reqDto, pack.account.AccountModel account) {
		if (reqDto == null || account == null) {
            return null;
        }
		
		return new UserModel(
			null, // El ID se genera automáticamente, por lo que se pasa como `null`
			account,
            reqDto.getBirth(),
            reqDto.getGender(),
            reqDto.getRole(),
            reqDto.getFullname(),
            reqDto.getPhoneNumber(),
            reqDto.getAddress(),
            reqDto.getCity(),
            reqDto.getCountry(),
            reqDto.isStatus()
		);
	}
}

