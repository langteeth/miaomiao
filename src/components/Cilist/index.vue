<template>
    <div class="cinema_body">
        <ul>
            <li>
                <div>
                   <span class="cinema_name">UA电影城(上海梅龙镇广场店)</span>
                    <span class="P"><span class="price">25</span>元起</span>
                </div>
                 <div class="address">
                     <span>静安区南京西路1038号梅龙镇广场10楼（近江宁路）</span>
                     <span>863.4km</span>
                 </div>
                <div class="card">
                    <div>改签</div>
                    <div>退票</div>
                    <div>折扣卡</div>
                    <div>小吃</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Cilist"
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
 .cinema_body .card div .or {
     color:#fc7103;
     border: 1px solid #fc7103;
 }
 .cinema_body .card div .bl {
     color: #589daf;
     border: 1px solid #589daf;
 }
</style>