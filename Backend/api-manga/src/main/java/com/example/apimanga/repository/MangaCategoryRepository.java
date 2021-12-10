package com.example.apimanga.repository;

import com.example.apimanga.dbTable.tmMangaCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the MangaInfo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MangaCategoryRepository extends JpaRepository<tmMangaCategory,Long> {

    @Modifying
    @Query(value = "SELECT * FROM tm_manga_category WHERE category_id = ?1", nativeQuery = true)
    tmMangaCategory findtmMangaCategoryById(@Param("category_id") int category_id);

    @Query(value = "SELECT * FROM tm_manga_category WHERE category_id = ?1", nativeQuery = true)
    tmMangaCategory findtmMangaCategoryName(@Param("category_id") int category_id);
}
