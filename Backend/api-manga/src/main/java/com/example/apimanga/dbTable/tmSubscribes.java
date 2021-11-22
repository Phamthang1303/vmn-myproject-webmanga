package com.example.apimanga.dbTable;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "tm_subscribes")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class tmSubscribes {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator", allocationSize=1)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "descriptions")
    private String descriptions;

    @Column(name = "type")
    private int type;

    @Column(name = "datetime")
    private ZonedDateTime datetime;

    // jhipster-needle-entity-add-field - JHipster will add fields here


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public tmSubscribes id(Long id){
        this.id = id;
        return this;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public tmSubscribes type(int type){
        this.type = type;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public tmSubscribes username(String username){
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public tmSubscribes password(String password){
        this.password = password;
        return this;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public tmSubscribes descriptions(String descriptions){
        this.descriptions = descriptions;
        return this;
    }

    public ZonedDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(ZonedDateTime datetime) {
        this.datetime = datetime;
    }

    public tmSubscribes datetime(ZonedDateTime datetime){
        this.datetime = datetime;
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof tmSubscribes)) {
            return false;
        }

        return id != null && id.equals(((tmSubscribes) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Subscribes{" +
                "id=" + getId() +
                ", username='" + getUsername() + "'" +
                ", password='" + getPassword() + "'" +
                ", type='" + getType() + "'" +
                ", datetime='" + getDatetime() + "'" +
                ", descriptions='" + getDescriptions() + "'" +
                "}";
    }

}
