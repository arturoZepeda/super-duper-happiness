<script setup>
defineProps({
    clima: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="resultado">
        <h2>Clima de: {{ clima.name }}</h2>
        <p class="actual">{{ clima.main.temp }} <span>&deg;C</span></p>
        <div class="temperatura">
            <p>Min. {{ clima.main.temp_min }} <span>&deg;C</span></p>
            <p>Max. {{ clima.main.temp_max }} <span>&deg;C</span></p>
        </div>
    </div>
</template>