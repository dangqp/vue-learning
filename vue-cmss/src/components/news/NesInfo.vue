<template>
    <div class="newsinfo">
        <h3 class="title">{{title}}</h3>
        <p class="subtitile">
            <span class="time">{{tiem|dateFormat}}</span>
            <span class="cnt">{{cnt}}</span>
        <hr>
        </p>
        <div class="conent" v-html="conent"></div>
        <comm-box :id="id"></comm-box>
    </div>
</template>

<script>
    import comm from '../suncom/Commemt.vue'
    export default{
        data(){
            return {
                id: this.$route.params.id,
                title: '震惊~~~~~~',
                tiem: '20200909',
                cnt: '10',
                conent: '深圳资讯网消息，不知道大家有没有遇到过一进理发店，店员就开始给你推销会员卡，连剪头发都在疯狂暗示。虽然办了会员卡能有一些优惠，但是理发店的套路也从你办卡的时候开始了。近日杭州一女士在一理发店里办了张储值卡，但却因为店家换了招牌，卡里余额2.5万继续用得再充2.5万，这令该女士很困扰，网友也纷纷为该女士鸣不平，称这理发店套路太深了。杭州的汪女士有一张理发店的储值卡，她说卡里余额有两万五千块钱，最近店家又换了招牌，想要继续用卡，得再充两万五千块钱，她觉得不合理。记者到店里核实情况，工作人员却说：“你用语言的魅力来伤害我!网友对此鸣不平，纷纷表示这明显是诈骗呀!进理发店后千万不能办卡，你不办卡的时候他们服务特好。你办完卡交了钱后就要被人捏在手里了曾经网友流传这一句俗语，叫做“杭州不理发，青岛不吃虾”，大概是因为杭州大多数理发店太坑了吧，之前有一名小伙带着三千元以及梦想去杭州打拼，路遇一家理发店，本想进店理发给自己的形象加分，结果被商家套路一共花费九千多，所以大家一定要记住进理发店后一定不要办卡充值'
            }
        },
        components:{
            'comm-box':comm
        }
    }
</script>

<style scoped>
    .newsinfo {
        padding: 0 4px;
    }

    .newsinfo .title {
        font-size: 24px;
        text-align: center; /*字体居中*/
        margin: 15px 0;
        color: red;
    }

    .subtitile {
        font-size: 27px;
        color: #2ae023;
        display: flex;
        justify-content: space-between;
    }

    .conent {
        font-size: 20px;
    }
</style>
