package com.example.apimanga.repository;

import com.example.apimanga.dbTable.tmMangaCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the MangaInfo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MangaCategoryRepository extends JpaRepository<tmMangaCategory,Long> {
//    public tmMangaCategory findByMg_name(String mg_name);
}
