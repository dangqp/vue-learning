package com.dangqp.vue.vuelog.service.impl;

import com.dangqp.vue.vuelog.entity.Blog;
import com.dangqp.vue.vuelog.mapper.BlogMapper;
import com.dangqp.vue.vuelog.service.BlogService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author dangqp
 * @since 2020-09-14
 */
@Service
public class BlogServiceImpl extends ServiceImpl<BlogMapper, Blog> implements BlogService {

}
