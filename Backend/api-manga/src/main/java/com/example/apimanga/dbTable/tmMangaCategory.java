package com.example.apimanga.dbTable;

import javax.persistence.*;

@Entity
@Table(name = "tm_manga_category")
public class tmMangaCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator", allocationSize=1)
    private Long id;

    @Column(name = "category_name")
    private String category_name;

    @Column(name = "category_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator", allocationSize=1)
    private int category_id;

    @Column(name = "category_descriptions")
    private String category_descriptions;

    @Column(name = "category_note")
    private String category_note;
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

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    public tmMangaCategory category_name(String category_name){
        this.category_name = category_name;
        return this;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public tmMangaCategory category_id(int category_id){
        this.category_id = category_id;
        return this;
    }

    public String getCategory_descriptions() {
        return category_descriptions;
    }

    public void setCategory_descriptions(String category_descriptions) {
        this.category_descriptions = category_descriptions;
    }

    public tmMangaCategory category_descriptions(String category_descriptions){
        this.category_descriptions = category_descriptions;
        return this;
    }

    public String getCategory_note() {
        return category_note;
    }

    public void setCategory_note(String category_note) {
        this.category_note = category_note;
    }

    public tmMangaCategory category_note(String category_note){
        this.category_note = category_note;
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
                ", category_name='" + getCategory_name() + "'" +
                ", category_id='" + getCategory_id() + "'" +
                ", category_descriptions='" + getCategory_descriptions() + "'" +
                ", category_note='" + getCategory_note() + "'" +
                "}";
    }
}
