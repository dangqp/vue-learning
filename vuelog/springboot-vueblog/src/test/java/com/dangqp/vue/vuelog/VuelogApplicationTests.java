package com.dangqp.vue.vuelog;

import com.dangqp.vue.vuelog.service.BlogService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class VuelogApplicationTests {

    @Autowired
    BlogService blogService;
    @Test
    public void contextLoads() {
        System.out.println(blogService.getById(1));
    }

    @Test
    public void encry(){
        String str = "111111";
    }

}
