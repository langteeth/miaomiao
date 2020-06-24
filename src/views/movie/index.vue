<template>
    <div id="main">
        <Header title="喵喵电影"/>
         <div id="content">
             <div class="movie_menu">
                 <span class="city_name">上海<i class="triangle"></i></span>
                 <div class="hot-switch">
                     <div class="hot_item active">正在热映</div>
                     <div class="hot_item">即将上映</div>
                 </div>
                 <div class="search_entry">
                     <i class="iconfont icon-search"></i>
                 </div>
             </div>
             <keep-alive>
                 <router-view />
             </keep-alive>
         </div>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

    export default {
        name: "movie",
        components:{
            Header,
            TabBar
        }
    }
</script>

<style scoped>
    #content .triangle {
        position: relative;
        left: 4px;
        top:12px;
        height: 0;
        width: 0;
        border:4px solid;
        border-color:black transparent transparent;
    }
    #content .movie_menu {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        z-index: 10;
    }
    .movie_menu .city_name {
        margin-left: 20px;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .city_name.active {
        color: #e54847;
        border-bottom:2px  #e54847 solid;
    }
    .movie_menu .hot-switch {
        display: flex;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .hot_item {
        font-size: 15px;
        color: #666;
        width: 80px;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
    }
    .movie_menu .hot_item.active{
        color: #e54847;
        border-bottom: 2px #e54847 solid;
    }
    .movie_menu .search_entry {
        margin-right: 20px;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .search_entry.active {
        color: #e54847;
        border-bottom: 2px #e54847 solid;
    }

</style>