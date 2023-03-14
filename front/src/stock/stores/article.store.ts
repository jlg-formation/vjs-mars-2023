import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Article } from './interfaces/article'

export const useArticleStore = defineStore('articles', () => {
  const articles = ref<Article[]>([
    { id: 'a1', name: 'Tournevis', price: 2.66, qty: 123 },
    { id: 'a2', name: 'Pelle', price: 3, qty: 78 }
  ])
  const total = computed(() => articles.value.length)
  const add = () => {
    throw new Error('not implemented')
  }
  const remove = () => {
    throw new Error('not implemented')
  }

  return { articles, total, add, remove }
})
