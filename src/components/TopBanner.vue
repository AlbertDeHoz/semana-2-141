<template>
  <div>
      <top-menu></top-menu>
    <div>
      <div id="carousel" class="carousel slide" data-ride="caousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1" class></li>
          <li data-target="#carousel" data-slide-to="2" class></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg
              class="bc-placeholder-img bd-placeholder-om-lg d-block w-100"
              width="800"
              preserveAspecRatio="xMidYMid slice"
              focusable="false"
              role="img"
            />
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%"></text>
            <div class="carousel-caption d-none d-md-block">
              <h5>Bienvenido</h5>
              <p>Grupo 141 - Reto 2 - Ciclo 3</p>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bc-placeholder-img bd-placeholder-om-lg d-block w-100"
              width="800"
              preserveAspecRatio="xMidYMid slice"
              focusable="false"
              role="img"
            />
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%"></text>
            <div class="carousel-caption d-none d-md-block">
              <h5>UTP</h5>
              <p>Universidad Tecnológica de Pereira</p>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bc-placeholder-img bd-placeholder-om-lg d-block w-100"
              width="800"
              preserveAspecRatio="xMidYMid slice"
              focusable="false"
              role="img"
            />
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%"></text>
            <div class="carousel-caption d-none d-md-block">
              <h5>MinTIC 2022</h5>
              <p>Proyecto Misión TIC 2022</p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide>
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Siguiente</span>
      </a>
    </div>
  </div>
</template>

<script>
import TopMenu from './TopMenu';
export default {
  name: "TopBanner",
  components:{
      TopMenu
  }
};
</script>