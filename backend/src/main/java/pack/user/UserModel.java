package pack.user;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import pack.account.AccountModel;

@Entity
@Table(name = "users")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_account", referencedColumnName = "account_id", nullable = false)
    private AccountModel account;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "user_birth", nullable = false)
    private Date birth;
    
    @Column(name = "user_gender", nullable = false, columnDefinition = "char(1) check(user_gender in ('h', 'm'))")
    private char gender;

    @Column(name = "user_role", nullable = false, columnDefinition = "char(1) check(user_role in ('c', 'a'))")
    private char role;

    @Column(name = "user_fullname", nullable = false, length = 100)
    private String fullname;

    @Column(name = "user_phone_number", length = 20)
    private String phoneNumber;

    @Column(name = "user_address", length = 255)
    private String address;

    @Column(name = "user_city", length = 50)
    private String city;

    @Column(name = "user_country", length = 50)
    private String country;

    @Column(name = "user_status", nullable = false)
    private boolean status;
    
	public UserModel() {
	}

	public UserModel(Long id, pack.account.AccountModel account, Date birth, char gender, char role, String fullname,
			String phoneNumber, String address, String city, String country, boolean status) {
		this.id = id;
		this.account = account;
		this.birth = birth;
		this.gender = gender;
		this.role = role;
		this.fullname = fullname;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.city = city;
		this.country = country;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public pack.account.AccountModel getAccount() {
		return account;
	}

	public void setAccount(pack.account.AccountModel account) {
		this.account = account;
	}

	public Date getBirth() {
		return birth;
	}

	public void setBirth(Date birth) {
		this.birth = birth;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public char getRole() {
		return role;
	}

	public void setRole(char role) {
		this.role = role;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}
	
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}
	
	public void setCountry(String country) {
		this.country = country;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
}
