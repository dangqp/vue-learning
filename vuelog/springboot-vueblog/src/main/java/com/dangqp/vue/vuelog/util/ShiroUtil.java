package com.dangqp.vue.vuelog.util;

import com.dangqp.vue.vuelog.shiro.AccountProfile;
import org.apache.shiro.SecurityUtils;
/**
 * Title:com.dangqp.vue.vuelog.util.ShiroUtil
 * Description: 描述【ShiroUtil】
 * Copyright: Copyright (c) 2018
 * Company:
 * @author dangqp
 * @version 1.0
 * @created  2020/9/14 16:10
 */
public class ShiroUtil {

    public static AccountProfile getProfile() {
        return (AccountProfile) SecurityUtils.getSubject().getPrincipal();
    }

}