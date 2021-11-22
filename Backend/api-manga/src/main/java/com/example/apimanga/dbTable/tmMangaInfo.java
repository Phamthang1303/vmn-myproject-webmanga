package com.example.apimanga.dbTable;

import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.time.ZonedDateTime;
import org.hibernate.annotations.Cache;

@Entity
@Table(name="tm_manga_info")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class tmMangaInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator", allocationSize=1)
    private Long id;

    @Column(name = "datetime")
    private ZonedDateTime datetime;

    @Column(name = "mg_name")
    private String mg_name;

    @Column(name = "status")
    private int status;

    @Column(name = "chapter")
    private int chapter;

    @Column(name = "is_hot")
    private int is_hot;

    @Column(name = "is_view")
    private int is_view;

    @Column(name = "is_like")
    private int is_like;

    @Column(name = "is_share")
    private int is_share;

    @Column(name = "descriptions")
    private String descriptions;

    @Column(name = "sub_name")
    private String sub_name;

    @Column(name = "author")
    private String author;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public tmMangaInfo id(Long id){
        this.id = id;
        return this;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public tmMangaInfo status(int status){
        this.status = status;
        return this;
    }

    public int getIs_hot() {
        return is_hot;
    }

    public void setIs_hot(int is_hot) {
        this.is_hot = is_hot;
    }

    public tmMangaInfo is_hot(int is_hot){
        this.is_hot = is_hot;
        return this;
    }

    public int getIs_like() {
        return is_like;
    }

    public void setIs_like(int is_like) {
        this.is_like = is_like;
    }

    public tmMangaInfo is_like(int is_like){
        this.is_like = is_like;
        return this;
    }

    public int getIs_share() {
        return is_share;
    }

    public void setIs_share(int is_share) {
        this.is_share = is_share;
    }

    public tmMangaInfo is_share(int is_share){
        this.is_share = is_share;
        return this;
    }

    public int getIs_view() {
        return is_view;
    }

    public void setIs_view(int is_view) {
        this.is_view = is_view;
    }

    public tmMangaInfo is_view(int is_view){
        this.is_view = is_view;
        return this;
    }

    public String getMg_name() {
        return mg_name;
    }

    public void setMg_name(String mg_name){ this.mg_name = mg_name;}

    public tmMangaInfo mg_name(String mg_name){
        this.mg_name = mg_name;
        return this;
    }

    public String getSub_name() {
        return sub_name;
    }

    public void setSub_name(String sub_name){ this.sub_name = sub_name;}

    public tmMangaInfo sub_name(String sub_name){
        this.sub_name = sub_name;
        return this;
    }

    public int getChapter() {
        return chapter;
    }

    public void setChapter(int chapter) {
        this.chapter = chapter;
    }

    public tmMangaInfo chapter(int chapter){
        this.chapter = chapter;
        return this;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public tmMangaInfo author(String author){
        this.author = author;
        return this;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public tmMangaInfo descriptions(String descriptions){
        this.descriptions = descriptions;
        return this;
    }

    public ZonedDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(ZonedDateTime datetime) {
        this.datetime = datetime;
    }

    public tmMangaInfo datetime(ZonedDateTime datetime){
        this.datetime = datetime;
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof tmMangaInfo)) {
            return false;
        }

        return id != null && id.equals(((tmMangaInfo) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "MangaInfo{" +
                "id=" + getId() +
                ", mg_name='" + getMg_name() + "'" +
                ", status='" + getSub_name() + "'" +
                ", datetime='" + getDatetime() + "'" +
                ", is_host='" + getIs_hot() + "'" +
                ", chapter='" + getChapter() + "'" +
                ", is_view='" + getIs_view() + "'" +
                ", is_like='" + getIs_like() + "'" +
                ", is_share='" + getIs_share() + "'" +
                ", descriptions=" + getDescriptions() +
                ", sub_name=" + getSub_name() +
                ", author='" + getAuthor() + "'" +
                "}";
    }
}
