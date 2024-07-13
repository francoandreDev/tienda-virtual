package pack.image;

public class ResDto {
    private Long id;
    private Long productId;
    private String url;
    private String name;
    private byte[] data;

    public ResDto() {
    }

    public ResDto(Long id, Long productId, String url, String name, byte[] data) {
        this.id = id;
        this.productId = productId;
        this.url = url;
        this.name = name;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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