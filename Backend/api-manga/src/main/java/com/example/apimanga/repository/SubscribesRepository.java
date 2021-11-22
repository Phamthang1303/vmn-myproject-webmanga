package com.example.apimanga.repository;

import com.example.apimanga.dbTable.tmSubscribes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.concurrent.Flow;

/**
 * Spring Data SQL repository for the BlackList entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SubscribesRepository extends JpaRepository<tmSubscribes,Long> {

//    @Query(value = "SELECT CAMPAIGN_NAME FROM CAMPAIGN WHERE ID = ?1", nativeQuery = true)
//    String getCurrentCampaignName(@Param("campaign_id") long campaign_id);
//
//    @Query(value = "SELECT * FROM CAMPAIGN WHERE lower(description) = ?1 ORDER BY START_DATE DESC", nativeQuery = true)
//    Page<tmSubscribes> searchDescription(String description, Pageable pageable);
//
//    @Procedure(procedureName = "REMOVEREWARD")
//    void removeReward(@Param("Icampaign_id") long Icampaign_id);
}
