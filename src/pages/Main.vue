<template>
  <div class="p-6">
    <div v-for="(counter, index) in counters" :key="index" class="mb-5">
      <h3 class="text-lg font-semibold">Counter {{ index + 1 }}</h3>
      <div class="flex items-center space-x-3">
        <button
          class="bg-red-100 text-white px-4 py-2 rounded hover:bg-red-100 transition"
          @click="decrease(index)"
        >
          -1
        </button>
        <span class="text-xl font-bold">{{ counter }}</span>
        <button
          class="bg-red-100 text-white px-4 py-2 rounded hover:bg-red-100 transition"
          @click="increase(index)"
        >
          +1
        </button>
      </div>
    </div>
    <h2 class="text-2xl font-bold">Umumiy natija: {{ total }}</h2>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

// Reactive state
const state = reactive({
  counters: [0, 0, 0],
})

// Methods to modify counters
const increase = (index) => {
  state.counters[index] += 1
}

const decrease = (index) => {
  state.counters[index] -= 1
}

// Computed property to calculate total
const total = computed(() => {
  return state.counters.reduce((sum, value) => sum + value, 0)
})
</script>

<style>
/* No custom styles needed since Tailwind is used */
</style>
