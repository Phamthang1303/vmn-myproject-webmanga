package com.example.apimanga.repository;

import com.example.apimanga.dbTable.tmMangaTransactionsLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the MangaTransactionsLog entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MangaTransactionsLogRepository extends JpaRepository<tmMangaTransactionsLog, Long> {
}
