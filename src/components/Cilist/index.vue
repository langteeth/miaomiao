<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemaList" :key="item.id">
                <div>
                   <span class="cinema_name">{{item.nm}}</span>
                    <span class="P"><span class="price">{{item.sellPrice}}</span>元起</span>
                </div>
                 <div class="address">
                     <span>{{item.addr}}</span>
                     <span>{{item.distance}}</span>
                 </div>
                <div class="card">
                    <div v-for="(num,key) in item.tag" v-if="num ===1" :key="key" :class="key |classCard">{{key | formateCard}}</div>

<!--                    <div>改签</div>-->
<!--                    <div>退票</div>-->
<!--                    <div>折扣卡</div>-->
<!--                    <div>小吃</div>-->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Cilist",
        data() {
            return {
                cinemaList:[]
            }
        },
        mounted() {
            this.axios.get('/api/cinemaList?cityId=10').then(res=>{
                var msg = res.data.msg;
                if  (msg === 'ok') {
                    this.cinemaList = res.data.data.cinemas;
                }
            })
        },
        filters: {
            formateCard(key) {
                var card = [
                    {key:'allowRefund',value:'可退'},
                    {key:'endorse',value:'改签'},
                    {key:'sell',value:'折扣卡'},
                    {key:'snack',value:'小吃'}
                ];
                for (var i = 0;i < card.length;i++) {
                    if (card[i].key === key) {
                        return card[i].value;
                    }
                }
                return '';
            },
            classCard(key) {
               var card = [
                   {key:'allowRefund',value:'or'},
                   {key:'endorse',value:'or'},
                   {key:'sell',value:'bl'},
                   {key:'snack',value:'bl'}
               ];
                for (var i = 0;i < card.length;i++) {
                    if (card[i].key === key) {
                        return card[i].value;
                    }
                }
                return '';
            }
         }
    }
</script>

<style scoped>
 .cinema_body {
     flex: 1;
     overflow: auto;
 }
 .cinema_body ul {
     padding:20px;
 }
.cinema_body  li {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
}
.cinema_body div {
    margin-bottom: 10px;
}
.cinema_body .P {
    font-size: 11px;
    color: #fc2f51;
    float: right;
}
.cinema_body .price {
    font-size: 18px;

}
.cinema_body .address {
    font-size: 13px;
    color: #666;
}
.cinema_body .address span:nth-of-type(2) {
    float: right;
}
.cinema_body .card {
    display: flex;
}
.cinema_body .card div {
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    color: #fc7103;
    border:1px solid;
    margin-right: 5px;
    font-size: 13px;

}
 .cinema_body .card  .or {
     color:#fc7103;
     border: 1px solid #fc7103;
 }
 .cinema_body .card  .bl {
     color: #589daf;
     border: 1px solid #589daf;
 }
</style>