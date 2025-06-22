import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSimulationStore = defineStore('simulation', () => {
  const simulation = ref({
    assets: [],
    monthlyAmount: 0,
    term: 12,
    scenario: 'optimistic'
  })

  const historicalData = ref([])

  const fetchHistoricalData = async () => {
    // API call implementation
  }

  return { simulation, historicalData, fetchHistoricalData }
})
    
