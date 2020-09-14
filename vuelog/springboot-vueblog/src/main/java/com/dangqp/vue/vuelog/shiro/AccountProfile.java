package com.dangqp.vue.vuelog.shiro;

import lombok.Data;

import java.io.Serializable;

/**
 * Title:com.dangqp.vue.vuelog.shiro
 * Description:
 * Copyright: Copyright (c) 2020
 *
 * @author dangqp
 * @version 1.0
 * @created 2020/09/14  14:44
 */
@Data
public class AccountProfile implements Serializable {
    private Long id;
    private String username;
    private String avatar;
}
