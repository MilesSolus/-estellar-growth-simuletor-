<template>
  <div :class="['app', { 'dark-mode': darkMode }]">
    <ProgressBar :steps="5" :current="currentStep" />
    <component 
      :is="currentComponent"
      @next="nextStep"
      @back="prevStep"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProgressBar from './components/shared/ProgressBar.vue'

const currentStep = ref(1)
const steps = [
  'Step1-AssetType',
  'Step2-Configuration',
  'Step3-Calculations',
  'Step4-Visualization',
  'Step5-Export'
]

const currentComponent = computed(() => steps[currentStep.value - 1])

const nextStep = () => currentStep.value++
const prevStep = () => currentStep.value--
</script>
