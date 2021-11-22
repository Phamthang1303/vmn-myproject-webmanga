package com.example.apimanga.dbTable;

import javax.persistence.*;

@Entity
@Table(name = "tm_manga_category")
public class tmMangaCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator", allocationSize=1)
    private Long id;

    @Column(name = "mg_name")
    private String mg_name;

    @Column(name = "mg_number")
    private int mg_number;

    // jhipster-needle-entity-add-field - JHipster will add fields here


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public tmMangaCategory id(Long id){
        this.id = id;
        return this;
    }

    public String getMg_name() {
        return mg_name;
    }

    public void setMg_name(String mg_name) {
        this.mg_name = mg_name;
    }

    public tmMangaCategory mg_name(String mg_name){
        this.mg_name = mg_name;
        return this;
    }

    public int getMg_number() {
        return mg_number;
    }

    public void setMg_number(int mg_number) {
        this.mg_number = mg_number;
    }

    public tmMangaCategory mg_number(int mg_number){
        this.mg_number = mg_number;
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof tmMangaCategory)) {
            return false;
        }

        return id != null && id.equals(((tmMangaCategory) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "MangaCategory{" +
                "id=" + getId() +
                ", mg_name='" + getMg_name() + "'" +
                ", mg_number='" + getMg_number() + "'" +
                "}";
    }
}
