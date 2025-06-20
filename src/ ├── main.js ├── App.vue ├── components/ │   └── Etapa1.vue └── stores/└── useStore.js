src/main.js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')
src/App.vue
<template>
  <div class="app">
    <Etapa1 v-if="etapaAtual === 1" @proxima="etapaAtual++"/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Etapa1 from './components/Etapa1.vue'
const etapaAtual = ref(1)
</script>
src/componentsEtapa1.vue
<template>
  <div class="etapa">
    <h2>Etapa 1: Escolha seu Investimento</h2>
    <button @click="$emit('proxima')">Próxima</button>
  </div>
</template>
src/stores/usestore.js
import { reactive } from 'vue'
export const store = reactive({
  dadosInvestimento: {}
})
