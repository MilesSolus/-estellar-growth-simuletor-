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
Etapa2.vue
<template>
  <div class="etapa">
    <h2>Etapa 2: Configuração do Investimento</h2>
    
    <div class="entrada">
      <label>Valor Mensal (R$):</label>
      <input 
        v-model="armazenamento.dadosInvestimento.valorMensal" 
        type="number" 
        min="0"
      >
    </div>

    <div class="entrada">
      <label>Prazo (meses):</label>
      <input 
        v-model="armazenamento.dadosInvestimento.prazo" 
        type="number" 
        min="6"
      >
    </div>

    <div class="botoes">
      <button @click="$emit('voltar')">Voltar</button>
      <button @click="validarDados">Próxima</button>
    </div>
  </div>
</template>

<script setup>
import { armazenamento } from '../armazenamento/usarArmazenamento'

const validarDados = () => {
  if (armazenamento.dadosInvestimento.valorMensal > 0) {
    $emit('proxima')
  } else {
    alert('Digite um valor válido!')
  }
}
</script>

<style scoped>
.entrada {
  margin: 15px 0;
}
input {
  padding: 8px;
  width: 100%;
}
</style>
Etapa3.vue
<template>
  <div class="etapa">
    <h2>Etapa 3: Projeção de Retorno</h2>
    
    <div class="resultado">
      <p>Valor Investido Total: R$ {{ calcularTotalInvestido() }}</p>
      <p>Patrimônio Projetado: R$ {{ calcularProjecao() }}</p>
    </div>

    <div class="botoes">
      <button @click="$emit('voltar')">Voltar</button>
      <button @click="$emit('proxima')">Visualizar Gráficos</button>
    </div>
  </div>
</template>

<script setup>
import { armazenamento } from '../armazenamento/usarArmazenamento'

const calcularTotalInvestido = () => {
  return armazenamento.dadosInvestimento.valorMensal * 
         armazenamento.dadosInvestimento.prazo
}

const calcularProjecao = () => {
  const juros = 0.1 // 10% ao ano (simulação)
  return calcularTotalInvestido() * (1 + juros)
}
</script>
Etapa4.vue
<template>
  <div class="etapa">
    <h2>Etapa 4: Visualização</h2>
    
    <div class="grafico-container">
      <!-- Espaço para gráficos (será implementado com Chart.js) -->
      <p class="placeholder">Gráfico de Projeção será exibido aqui</p>
    </div>

    <div class="botoes">
      <button @click="$emit('voltar')">Voltar</button>
      <button @click="$emit('proxima')">Exportar Relatório</button>
    </div>
  </div>
</template>

<style scoped>
.placeholder {
  background: #f0f0f0;
  padding: 50px;
  text-align: center;
}
</style>
Etapa5.vue
<template>
  <div class="etapa">
    <h2>Etapa 5: Exportar Relatório</h2>
    
    <div class="opcoes">
      <button @click="exportarPDF">Gerar PDF</button>
      <button @click="exportarCSV">Exportar CSV</button>
    </div>

    <div class="botoes">
      <button @click="$emit('voltar')">Voltar</button>
      <button @click="finalizar">Concluir</button>
    </div>
  </div>
</template>

<script setup>
const exportarPDF = () => {
  alert('PDF gerado com sucesso! (simulação)')
}

const exportarCSV = () => {
  alert('CSV exportado! (simulação)')
}

const finalizar = () => {
  if (confirm('Deseja realmente finalizar?')) {
    // Lógica para resetar o simulador
    window.location.reload()
  }
}
</script>

<style scoped>
.opcoes {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}
</style>

