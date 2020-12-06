<template>
<<<<<<< HEAD
  <div class="col-3 bg-white rounded mb-5">
    <div class="card bg-dark text-white p-4">
      <img
        class="card-img-top"
        :src="member.image"
        alt="Imagen del integrante"
      />
      <div class="card-body">
        <h5 class="card-title text-center mb-0">
          Team member {{ member.codigo }}
        </h5>
        <h5 class="card-title text-center">{{ member.rol }}</h5>

        <h5 class="card-title text-center">{{ member.nombre }}</h5>

        <p class="card-text text-center">
          {{ member.descripcion }}
        </p>
=======
    <div class="col-3 bg-white rounded mb-5">
      <div class="card bg-dark text-white p-4 h-100">
        <img class="card-img-top" src="@/assets/images/Leandro.jpg" alt="Card image cap" v-if="member.codigo===1"/>
        <img class="card-img-top" src="@/assets/images/Nicolay.jpg" alt="Card image cap" v-if="member.codigo===2"/>
        <img class="card-img-top" src="@/assets/images/Alberto.jpg" alt="Card image cap" v-if="member.codigo===3"/>
        <img class="card-img-top" src="@/assets/images/Emanuel.jpg" alt="Card image cap" v-if="member.codigo===4"/>
       
        <div class="card-body">
          <h5 class="card-title text-center mb-0">Team member {{member.codigo}}</h5>
          <h5 class="card-title text-center">{{member.rol}}</h5>

          <h5 class="card-title text-center">{{member.nombre}}</h5>

          <p class="card-text text-center">
           {{member.descripcion}}
          </p>
        </div>
>>>>>>> a06a26209030dd1beb86b2b0e0160f8d8e4a3d26
      </div>
    </div>
  </div>
</template>

<script>
//var ruta='"../assets/img/l2.jpg"'

export default {
  // src="../assets/img/l2.jpg"  :src="member.image"  :src="require(member.image)" ${publicPath}my-image.png`
  name: "TeamCard",

  props: { member: { type: Object } }
  }
 
  


</script>

<style scoped>
</style>
