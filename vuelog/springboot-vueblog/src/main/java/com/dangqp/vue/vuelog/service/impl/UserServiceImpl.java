package com.dangqp.vue.vuelog.service.impl;

import com.dangqp.vue.vuelog.entity.User;
import com.dangqp.vue.vuelog.mapper.UserMapper;
import com.dangqp.vue.vuelog.service.UserService;
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
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
