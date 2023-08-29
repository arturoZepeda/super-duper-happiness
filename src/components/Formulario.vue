<script setup>
import { reactive } from 'vue';
const busqueda = reactive({
    ciudad: '',
    pais: ''
});
const paises = [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' }
]
</script>

<template>
    <form class="formulario">
        <div class="campo">
            <label for="ciudad">Ciudad</label>
            <input type="text" name="ciudad" id="ciudad" placeholder="Ciudad" v-model="busqueda.ciudad">
        </div>
        <div class="campo">
            <label for="pais">País</label>
            <select id="pais" name="pais" v-model="busqueda.pais">
                <option value="">---Seleccione un país ---</option>
                <option 
                    v-for="pais in paises" 
                    :key="pais.codigo"
                    :value="pais.codigo">{{ pais.nombre }}</option>
            </select> 
        </div>
        <input type="submit" class="boton" value="Consultar Clima">
    </form>
</template>