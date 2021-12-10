package com.example.apimanga.repository;

import com.example.apimanga.dbTable.dbView.vwTmMangaInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data SQL repository for the prdMangaInfo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CustomMangaInfoRepository extends JpaRepository<vwTmMangaInfo,Long> {

    @Modifying
    @Query(value = "SELECT * FROM vw_tm_manga_info WHERE mg_name = ?1", nativeQuery = true)
    vwTmMangaInfo findByMg_name(@Param("mg_name") String mg_name);

    @Query(value = "SELECT * FROM vw_tm_manga_info WHERE sub_name = ?1", nativeQuery = true)
    vwTmMangaInfo findBySub_name(@Param("mg_name") String sub_name);

    @Query(value = "SELECT Top(12) * FROM vw_tm_manga_info ORDER BY datetime", nativeQuery = true)
    List<vwTmMangaInfo> findAllOrderByDatetime();
}
