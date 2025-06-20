src/main.js
import { createApp } from 'vue'  // Correto para Vue 3
import App from './App.vue'      // Caminho relativo válido
const app = createApp(App)       // Sintaxe de inicialização correta
app.mount('#app')               // Seleciona o elemento #app do HTML
src/App.vue 
<template>
  <!-- Template válido com diretiva v-if -->
  <Etapa1 v-if="etapaAtual === 1" @proxima="etapaAtual++"/>
</template>

<script setup>  // <--- Sintaxe Composition API com `<script setup>` (Vue 3+)
import { ref } from 'vue'         // Importação correta
import Etapa1 from './components/Etapa1.vue'  // Caminho relativo válido
const etapaAtual = ref(1)         // Uso correto de `ref()`
</script>
src/components/Etapa1.vue
<template>
  <!-- Estrutura básica válida -->
  <div class="etapa">
    <h2>Etapa 1: Escolha seu Investimento</h2>
    <button @click="$emit('proxima')">Próxima</button>  // Emissão de evento correta
  </div>
</template>
<!-- Não precisa de <script> se não houver lógica -->
src/storege/useStore.js
import { reactive } from 'vue'  // Importação correta
export const store = reactive({ // Uso válido de `reactive()`
  dadosInvestimento: {}         // Objeto reativo padrão
})


