<template>
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
