package com.example.apimanga.dbTable;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "tm_manga_transactions_log")
public class tmMangaTransactionsLog {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator", allocationSize=1)
    private Long id;

    @Column(name = "ip")
    private String ip;

    @Column(name = "username")
    private String username;

    @Column(name = "mg_name")
    private String mg_name;

    @Column(name = "descriptions")
    private String descriptions;

    @Column(name = "datetime")
    private ZonedDateTime datetime;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public tmMangaTransactionsLog id(Long id){
        this.id = id;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public tmMangaTransactionsLog username(String username){
        this.username = username;
        return this;
    }

    public String getMg_name() {
        return mg_name;
    }

    public void setMg_name(String mg_name) {
        this.mg_name = mg_name;
    }

    public tmMangaTransactionsLog mg_name(String mg_name){
        this.mg_name = mg_name;
        return this;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public tmMangaTransactionsLog ip(String ip){
        this.ip = ip;
        return this;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public tmMangaTransactionsLog descriptions(String descriptions){
        this.descriptions = descriptions;
        return this;
    }

    public ZonedDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(ZonedDateTime datetime) {
        this.datetime = datetime;
    }

    public tmMangaTransactionsLog datetime(ZonedDateTime datetime){
        this.datetime = datetime;
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof tmMangaTransactionsLog)) {
            return false;
        }

        return id != null && id.equals(((tmMangaTransactionsLog) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "MangaTransactionsLog{" +
                "id=" + getId() +
                ", ip='" + getIp() + "'" +
                ", username='" + getUsername() + "'" +
                ", mg_name='" + getMg_name() + "'" +
                ", descriptions='" + getDescriptions() + "'" +
                ", datetime='" + getDatetime() + "'" +
                "}";
    }
}
