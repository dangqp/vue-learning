package com.dangqp.vue.vuelog.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Title:com.dangqp.vue.vuelog.config.CorsConfig
 * Description: 描述【CorsConfig】
 * Copyright: Copyright (c) 2018
 * Company:
 * @author dangqp
 * @version 1.0
 * @created  2020/9/14 17:31
 */
/**
 * 解决跨域问题
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS")
                .allowCredentials(true)
                .maxAge(3600)
                .allowedHeaders("*");
    }
}