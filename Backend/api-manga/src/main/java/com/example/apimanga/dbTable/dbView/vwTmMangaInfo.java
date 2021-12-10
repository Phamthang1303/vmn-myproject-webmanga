package com.example.apimanga.dbTable.dbView;

import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.time.ZonedDateTime;
import org.hibernate.annotations.Cache;

@Entity
@Table(name="vw_tm_manga_info")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class vwTmMangaInfo {
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

    @Column(name = "category")
    private String category;

    @Column(name = "media_title")
    private String media_title;

    @Column(name = "media_content")
    private String media_content;

    @Column(name = "picture_type")
    private String picture_type;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public vwTmMangaInfo id(Long id){
        this.id = id;
        return this;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public vwTmMangaInfo status(int status){
        this.status = status;
        return this;
    }

    public int getIs_hot() {
        return is_hot;
    }

    public void setIs_hot(int is_hot) {
        this.is_hot = is_hot;
    }

    public vwTmMangaInfo is_hot(int is_hot){
        this.is_hot = is_hot;
        return this;
    }

    public int getIs_like() {
        return is_like;
    }

    public void setIs_like(int is_like) {
        this.is_like = is_like;
    }

    public vwTmMangaInfo is_like(int is_like){
        this.is_like = is_like;
        return this;
    }

    public int getIs_share() {
        return is_share;
    }

    public void setIs_share(int is_share) {
        this.is_share = is_share;
    }

    public vwTmMangaInfo is_share(int is_share){
        this.is_share = is_share;
        return this;
    }

    public int getIs_view() {
        return is_view;
    }

    public void setIs_view(int is_view) {
        this.is_view = is_view;
    }

    public vwTmMangaInfo is_view(int is_view){
        this.is_view = is_view;
        return this;
    }

    public String getMg_name() {
        return mg_name;
    }

    public void setMg_name(String mg_name){ this.mg_name = mg_name;}

    public vwTmMangaInfo mg_name(String mg_name){
        this.mg_name = mg_name;
        return this;
    }

    public String getSub_name() {
        return sub_name;
    }

    public void setSub_name(String sub_name){ this.sub_name = sub_name;}

    public vwTmMangaInfo sub_name(String sub_name){
        this.sub_name = sub_name;
        return this;
    }

    public int getChapter() {
        return chapter;
    }

    public void setChapter(int chapter) {
        this.chapter = chapter;
    }

    public vwTmMangaInfo chapter(int chapter){
        this.chapter = chapter;
        return this;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public vwTmMangaInfo author(String author){
        this.author = author;
        return this;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public vwTmMangaInfo descriptions(String descriptions){
        this.descriptions = descriptions;
        return this;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public vwTmMangaInfo category(String category){
        this.category = category;
        return this;
    }

    public String getMedia_title() {
        return media_title;
    }

    public void setMedia_title(String media_title) {
        this.media_title = media_title;
    }

    public vwTmMangaInfo media_title(String media_title){
        this.media_title = media_title;
        return this;
    }

    public String getMedia_content() {
        return media_content;
    }

    public void setMedia_content(String media_content) {
        this.media_content = media_content;
    }

    public vwTmMangaInfo media_content(String media_content){
        this.media_content = media_content;
        return this;
    }

    public String getPicture_type() {
        return picture_type;
    }

    public void setPicture_type(String picture_type) {
        this.picture_type = picture_type;
    }

    public vwTmMangaInfo picture_type(String picture_type){
        this.picture_type = picture_type;
        return this;
    }

    public ZonedDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(ZonedDateTime datetime) {
        this.datetime = datetime;
    }

    public vwTmMangaInfo datetime(ZonedDateTime datetime){
        this.datetime = datetime;
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof vwTmMangaInfo)) {
            return false;
        }

        return id != null && id.equals(((vwTmMangaInfo) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CustomMangaInfo{" +
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
                ", category='" + getCategory() + "'" +
                ", media_title='" + getMedia_title() + "'" +
                ", media_content='" + getMedia_content() + "'" +
                ", picture_type='" + getPicture_type() + "'" +
                "}";
    }
}

