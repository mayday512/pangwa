<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
  <div class="q-py-lg q-px-md row items-end q-col-gutter-sm">
  <div class="col">
  <q-input class="new-pets" bottom-slots v-model="newpetcontent" placeholder="记录你的生活" counter maxlength="280" autogrow>
        <template v-slot:before>
          <q-avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" >
          </q-avatar>
        </template>
       
      </q-input>
  </div>
  <div class="col col-shrink">
          <q-btn :disable="!newpetcontent" 
          class="glossy q-mb-lg" rounded 
          color="deep-orange" label="发送" 
          @click="addnewpet"
          no-caps/>
  </div>
   
    </div>
    <q-separator size="10px" color="gray-5" class="divider"/>
     <q-list separator>
      <transition-group
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
      <q-item class="q-py-md pets" v-for="(item,index) in qweets" :key="index">

        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
          <strong>pangwa</strong>
          <span color="text-gray-7">@gong</span>
          </q-item-label>
          <q-item-label class="pets-content">
           {{item.content}}
           <img :src="item.imgurl" width="170px">
          </q-item-label>
          <div class="row justify-between q-mt-sm pets-icon">
             <q-btn flat round color="gray" icon="comment" size="sm"/>
              <q-btn flat round color="gray" icon="open_in_new" size="sm"/>
               <q-btn flat round color="gray" icon="favorite_border" size="sm"/>
                <q-btn flat round color="gray" icon="delete" size="sm"
                @click="deletepet(item)"/>
          </div>
        </q-item-section>

        <q-item-section side top>
          {{item.date | relativeDate}}
        </q-item-section>
      </q-item>
      </transition-group>
    </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance, subDays } from 'date-fns'
export default {
  name: 'PageHome',
  data(){
    return{
      newpetcontent:'',
      qweets:[
      {content:'家里有只边牧叫胖娃',
      date:1665725279362,
      imgurl:require('../assets/img/bianmu.jpg'),
      },
       {content:'五月天',
      date:1665725279362,
      }
      ]
    }
  },
  filters:{
      relativeDate(value){
        return formatDistance(value,new Date())
      }
  },
  methods:{
    addnewpet(){
      let newpet={
        content:this.newpetcontent,
        date:Date.now()
      }
      this.qweets.unshift(newpet),
      this.newpetcontent=''
    },
    deletepet(index){
        this.qweets.splice(index,1)
    }
  },
}
</script>
<style>
.new-pets textarea{
  font-size:19px;
  line-height:1.4 !important
}
.divider{
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: #aaa
}
.pets:not(:first-child){
  border-top: 1px solid rgba(0,0,0,0.12);
}
.pets-content{
  white-space: pre-line;
}
.pets-icon{
  margin-left: -5px;
}
</style>