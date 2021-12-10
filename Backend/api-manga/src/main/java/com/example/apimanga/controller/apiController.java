package com.example.apimanga.controller;

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
public class apiController {
    @Autowired
    private MangaInfoRepository info;

    @Autowired
    private MangaCategoryRepository mangaCategoryRepository;

    @RequestMapping("/")
    public String HomePage(){
        return "Welcome to TM page!";
    }

    @RequestMapping("/create-test")
    public String createSimpleData(
            @RequestParam(required = true,defaultValue = "0") int count
    ){
        tmMangaInfo tmInfo = new tmMangaInfo();
        try{
            int start = info != null?(int)info.count():0;
            for(int i = start ; i < start + count ; i++){
                tmInfo.setId(Long.valueOf(i));
                tmInfo.setMg_name("Manga " + i);
                tmInfo.setChapter(20 + i);
                tmInfo.setAuthor("Author " + i);
                tmInfo.setDatetime(ZonedDateTime.now());
                tmInfo.setSub_name("manga-" + i);
                tmInfo.setDescriptions("descriptions " + i);
                tmInfo.setStatus(1);
                tmInfo.setIs_hot((i%2==0?0:1));
                tmInfo.setIs_like(100 + i);
                tmInfo.setIs_share(50 + i);
                tmInfo.setIs_view(500+ (int)(Math.random()*300));
                int a = getNumber(4);
                tmInfo.setCategory((a) + "," + (a+1) + "," + (a+2));
                info.save(tmInfo);
            }
            int countData = info != null?(int)info.count():0;
            return "Done! added " + count + " item! All data : " + countData ;
        }catch (Exception ex){
            return "Error!";
        }
    }

    private int getNumber(int max){
        return 10 + (int)(Math.random()*max);
    }

    @DeleteMapping("/delete-all")
    public String deleteAllData(){
        try{
            int count = info != null?(int)info.count():0;
            if(info != null){
                info.deleteAll();
            }
            return "Delete " + count + " item!" ;
        }catch (Exception ex){
            return "Error!";
        }
    }

    @RequestMapping("/count-data")
    public String countAllData(){
        try{
            int count = info != null?(int)info.count():0;
            return "Have " + count + " item!" ;
        }catch (Exception ex){
            return "Error!";
        }
    }

    @RequestMapping("/get-data")
    public List<tmMangaInfo> getAllData(){
        return info.findAll();
    }

    @RequestMapping("/get-data-by-name")
    public List<tmMangaInfo> getDataByName(
            @RequestParam(required = true) String name
    ){
        return info.findByMg_name(name);
    }

    @RequestMapping("/get-category")
    public List<String> getCategoryById(
            @RequestParam(required = true) String id
    ){
        List<String> result = new ArrayList<>();
        try{
            List<String> lstId = !id.isEmpty()?Arrays.asList(id.split(",")):new ArrayList<>();
            for (String value : lstId){
                try{
                    result.add(mangaCategoryRepository.findtmMangaCategoryName(Integer.parseInt(value.trim())).getCategory_name());
                }catch (Exception ex){
                    System.out.println("Error load category id '" + value +"'");
                }
            }
        }catch (Exception e){
            System.out.println("Error getCategoryById: " + e);
        }
        return result;
    }
}
