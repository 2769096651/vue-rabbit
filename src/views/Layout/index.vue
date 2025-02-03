<template>
<div class='layout'>
  <h2>我是首页</h2>
  <LayoutHeader/>
  <LayoutNav/>
  <RouterView/>
  <LayoutFooter/>
</div>
</template>
<script setup  name='Layout'>
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';


</script>

<style>

</style>
