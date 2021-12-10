package com.example.apimanga.service;

import com.example.apimanga.dbTable.dbView.vwTmMangaInfo;
import com.example.apimanga.dbTable.tmMangaInfo;
import com.example.apimanga.repository.CustomMangaInfoRepository;
import com.example.apimanga.repository.MangaCategoryRepository;
import com.example.apimanga.repository.MangaInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class vwMangaInfoService {

    @Autowired
    private CustomMangaInfoRepository customMangaInfoRepository;

    @RequestMapping("/get-data-custom")
    public List<vwTmMangaInfo> getAllDataCustom(){
        return customMangaInfoRepository.findAllOrderByDatetime();
    }

    @RequestMapping("/get-data-custom-by-name")
    public vwTmMangaInfo getDataCustomByName(
            @RequestParam(required = true) String name
    ){
        return customMangaInfoRepository.findByMg_name(name);
    }

    @RequestMapping("/get-data-custom-by-sub-name")
    public vwTmMangaInfo getDataCustomBySubName(
            @RequestParam(required = true) String sub_name
    ){
        return customMangaInfoRepository.findBySub_name(sub_name);
    }
}
