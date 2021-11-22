package com.example.apimanga.repository;

import com.example.apimanga.dbTable.tmMangaInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data SQL repository for the MangaInfo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MangaInfoRepository extends JpaRepository<tmMangaInfo,Long> {
//    tmMangaInfo findByMg_name(String mgName);
    @Modifying
    @Query(value = "SELECT * FROM tm_manga_info WHERE mg_name = ?1", nativeQuery = true)
    Optional<tmMangaInfo> findByMg_name(@Param("mg_name") String msisdn);
}
