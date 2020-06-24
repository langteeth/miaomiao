<template>
    <div id="main">
        <Header title="喵喵影院"/>
        <div id="content">
            <div class="cinema_menu">
              <div class="city_switch">
                  全城 <i class="triangle"></i>
              </div>
               <div class="brand_switch">
                   品牌<i class="triangle"></i>
               </div>
                <div class="feature_switch">
                   特色 <i class="triangle"></i>
                </div>
            </div>
             <Cilist/>
        </div>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Cilist from '@/components/Cilist';
    export default {
        name: "cinema",
        components:{
            Header,
            TabBar,
            Cilist
        }
    }
</script>

<style scoped>

    #content .cinema_menu {
        display: flex;
        justify-content: space-around;
        height: 45px;
        border-bottom: 1px #ccc solid;
    }
    #content .city_switch,.brand_switch,.feature_switch {
        line-height: 45px;
    }
    #content  .triangle {
        position: relative;
        left: 4px;
        top:12px;
        height: 0;
        width: 0;
        border:4px solid;
        border-color:black transparent transparent;
    }
</style>