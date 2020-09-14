package com.dangqp.vue.vuelog.shiro;

import org.apache.shiro.authc.AuthenticationToken;

/**
 * Title:com.dangqp.vue.vuelog.shiro
 * Description:
 * Copyright: Copyright (c) 2020
 *
 * @author dangqp
 * @version 1.0
 * @created 2020/09/14  14:43
 */
public class JwtToken implements AuthenticationToken {
    private String token;

    public JwtToken(String token) {
        this.token = token;
    }

    @Override
    public Object getPrincipal() {
        return token;
    }

    @Override
    public Object getCredentials() {
        return token;
    }
}
