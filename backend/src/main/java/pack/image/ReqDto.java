package pack.image;

public class ReqDto {
    private Long productId;
    private String url;
    private String name;
    private byte[] data;

    public ReqDto() {
    }

    public ReqDto(Long productId, String url, String name, byte[] data) {
        this.productId = productId;
        this.url = url;
        this.name = name;
        this.data = data;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
