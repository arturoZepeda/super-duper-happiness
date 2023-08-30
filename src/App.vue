<script setup>
import formulario from './components/Formulario.vue'
import useClima from './composables/useClima';

const { obtenerClima } = useClima();


</script>

<template>
  <h1 class="titulo">Buscador clima</h1>
  <div class="contenedor buscador-clima">
    <formulario @obtener-clima="obtenerClima"/>
  </div>
</template>

<style scoped>

</style>
