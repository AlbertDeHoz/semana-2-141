<template>
  <div id="app" class="container">
  <SectionNews></SectionNews>
    <div class="row">
      <team-card :member="member[0]"></team-card>
      <team-card :member="member[1]"></team-card>
      <team-card :member="member[2]"></team-card>
      <team-card :member="member[3]"></team-card>
    </div>
  </div>
</template>

<script>
import TeamCard from "./components/TeamCard.vue";
import SectionNews from "./components/SectionNews.vue";
export default {
  name: "App",
  components: { TeamCard,SectionNews },
  data() {
    return {
      member: [
        {
          codigo: 1,
          nombre: "Leandro Rodriguez",
          descripcion:
            "Tengo 18 años, vivo en Palmira. Soy estudiante de la Universidad del Valle sede Palmira,en dónde estudio Tecnología en Sistemas de Información, actualmente estoy en 4to semestre. Me gusta la programacion, todo lo relacionado y quiero aprender más.",
          rol: "Desarrollador backend",
          image: "/img/l2.205c7e24.jpg",
        },
        {
          codigo: 2,
          nombre: "Nicolay Rivera",
          descripcion:
            " Tengo 45 años, vivo en la ciudad de Pereira.Soy Contador Público y siempre me han gustado la informática.Trabajo con una empresa desarrolladora de software especializada en el sector Público, donde me encargo de realizar las implementaciones.",
          rol: "Desarrollador backend",
          image: "/img/c.683d504f.jpg",
        },

        {
          codigo: 3,
          nombre: "Alberto Alonso De la Hoz",
          descripcion:
            "Tengo 23 años y siento una gran pasión por la informática y a la música. Estudié ingeniería mecánica en la universidad del Atlántico y actualmente estoy en proyecto de grado. Casi siempre voy a estar detrás de mi guitarra o de una computadora.",
          rol: "Desarrollador backend",
          image: "/img/g2.b1fa528e.jpg",
        },
        {
          codigo: 4,
          nombre: "Emanuel Valenciano",
          descripcion:
            "Aprendiz SENA en análisis y desarrollo de sistemasas de información, vivo en la ciiudad de Bogotá me gusta aprender y siempre estare dispuesto a hacerlo, en mi tiempo libre me gusta ver una buena película o salir y tomar el sol, jugar micro también está en las opciones.",
          rol: "Desarrollador backend",
          image: "/img/perfil.163d8530.jpg",
        },
      ],
    };
  },
};
</script>

