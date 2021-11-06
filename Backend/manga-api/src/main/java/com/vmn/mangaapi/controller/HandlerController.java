package com.vmn.mangaapi.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HandlerController {

    @RequestMapping("/")
    public String getHelloWorld(){
        return "Hello Eny xinh đẹp!";
    }
}
