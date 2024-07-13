package pack.history;

public class Mapper {
    public static ResDto toResDto(HistoryModel history) {
        if (history == null) {
            return null;
        }
        return new ResDto(
                history.getId(),
                history.getOrder() != null ? history.getOrder().getId() : null
        );
    }

    public static HistoryModel toEntity(ReqDto reqDto, pack.order.OrderModel order) {
        if (reqDto == null || order == null) {
            return null;
        }
        return new HistoryModel(
                null, // El ID se genera automáticamente, por lo que se pasa como `null`
                order
        );
    }
}
