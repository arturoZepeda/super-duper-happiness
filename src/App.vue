<script setup>
import formulario from './components/Formulario.vue'
import useClima from './composables/useClima';
import Clima from './components/Clima.vue';

const { obtenerClima, clima, mostrarClima } = useClima();
</script>

<template>
  <h1 class="titulo">Buscador clima</h1>
  <div class="contenedor buscador-clima">
    <formulario @obtener-clima="obtenerClima"/>
    <Clima :clima="clima" v-if="mostrarClima"/>
  </div>
</template>

<style scoped>

</style>
