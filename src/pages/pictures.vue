<template>
    <div id="app">
         <div class="upload">           
           <input type="file" id="file" multiple @change="upload">
         </div>
        <ul class="view">
            <li v-for="(item,index) in list" :key="index" >
                <img :src="item">
                <div class="delect" @click="delect(index)">×</div>
            </li>     
        </ul>
    </div>
</template>
    <script>
          export default {
         name: 'pictures',
         el:"#app",
         data(){
            return{
               list:[

               ]
            }
           
         },
         methods: {
            upload(e){
                      //e.target指向事件执行时鼠标所点击区域的那个元素
                      console.log(e.target.files)
                 //------------------------------------------------------     
                      for(let item of e.target.files){
                        if (!/image\/\w+/.test(item.type)) {
                                alert("只能选择图片");
                                return;
	             		}
                            var _this = this;
                            let reader = new FileReader();
                            // readAsDataURL方法可以将上传的图片格式转为base64,然后在存入到图片路径,这样就可以上传任意位置的图片
                            reader.readAsDataURL(item);
                            reader.addEventListener('load',function(){
                                _this.list.push(this.result)
                            })
                    }
                 //------------------------------------------------------------
                 },
                 delect(index){
                     console.log(index);
                     this.list.splice(index,1);                    
                 },
                 //
                 noDelect(){
                     alert('默认图片无法删除。')
                 }
         }
}
    </script>
<style>
*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        #app{
            width: 520px;
            background-color: rgb(241, 241, 241);
            margin: 50px auto;
        } 
.view{
           display: flex;
           justify-content: space-around;
           flex-wrap: wrap;
           align-items: space-around;
        }
.view > li{
            width: 200px;
            height: 120px;
            background-color: rgba(54, 194, 35,0.1);
            list-style: none;
            margin: 20px;
            position: relative;
        }
        .view > li > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
.delect{
            position: absolute;
            right: 0;
            top: 0;
             width: 20px;
             height: 20px;
             text-align: center;
             line-height: 20px;
             font-size: 15px;
             background-color: rgba(255, 255, 255,0.5);
             user-select: none;
             cursor: pointer;
             opacity: 0;
        }
        .delect:hover{
 
            background-color: rgba(31, 31, 31, 0.5);
             color: white;
        }
        .view>li:hover .delect{
            opacity: 1;
        }
    .upload{
            width: 80px;
            height: 20px;
            background-color: rgba(135, 206, 235,0.2);
            border: 1px dashed black;
            border-radius: 5px;
            position: relative;
 
        }
        .upload:hover{
            background-color: rgba(135, 206, 235,1);
        }
        .upload::before{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '上传图片';
            font-size: 13px;
            text-align: center;
            font-family: 'fangsong';
            line-height: 20px;
            user-select: none;
        }
        #file{
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    
</style>