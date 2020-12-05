<template>
  <div id="app">
    <top-banner></top-banner>
  </div>
</template>

<script>
import TopMenu from "./components/TopMenu";
import TopBanner from "./components/TopBanner";
export default {
  name: 'App',
  components:{
  TopBanner,
  TopMenu,
  },
  data(){
    return{
      title : 'Vivo dentro de VUE'
    }
  }
}
</script>

