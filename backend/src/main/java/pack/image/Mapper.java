package pack.image;

public class Mapper {
    public static ResDto toResDto(ImageModel image) {
        if (image == null) {
            return null;
        }
        return new ResDto(
                image.getId(),
                image.getProduct() != null ? image.getProduct().getId() : null,
                image.getUrl(),
                image.getName(),
                image.getData()
        );
    }

    public static ImageModel toEntity(ReqDto reqDto, pack.product.ProductModel product) {
        if (reqDto == null || product == null) {
            return null;
        }
        return new ImageModel(
                null, // El ID se genera automáticamente, por lo que se pasa como `null`
                reqDto.getUrl(),
                reqDto.getName(),
                reqDto.getData(),
                product
        );
    }
}
