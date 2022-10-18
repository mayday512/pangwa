
<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-green text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{$route.name}}</span>
          <q-icon name="pets"  size="lg" class="q-pa-md lt-gm absolute-center" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :width="283" bordered>
    <q-icon name="pets"  size="lg" class="q-pa-md" />
     <q-list>
      <q-item clickable v-ripple to="/" exact>
        <q-item-section avatar>
          <q-icon color="orange" name="home" size="md" />
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>

      <q-item 
      to="/about"
      clickable 
      v-ripple
      exact>
        <q-item-section avatar>
          <q-avatar color="teal"  icon="help" size="md"/>
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">about</q-item-section>
      </q-item>

      <q-item clickable v-ripple exact to="/pictures">
        <q-item-section avatar>
          <q-avatar color="purple" text-color="white" icon="collections" size="md" />
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">my pictures</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/pets">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white" size="md">
            i
          </q-avatar>
        </q-item-section>

        <q-item-section  class="text-h7 text-weight-bold">imformation of my pet</q-item-section>
      </q-item>


      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="md">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">more</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="md">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">more</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded size="md">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-h7 text-weight-bold">Image rounded avatar</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded size="md">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">List item</q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input rounded outlined class="q-ma-md" placeholder="dog" dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        </q-input>
       <template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
         <q-separator spaced />
         <q-item>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
         <q-separator spaced />
         <q-item>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
         <q-separator spaced />


      
      
    </q-list>
  </div>
</template>
    </q-drawer>
    
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>