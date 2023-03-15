import { generateId } from '@/misc'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Article, NewArticle } from './interfaces/article'

export const useArticleStore = defineStore('articles', () => {
  const articles = ref<Article[]>([
    { id: 'a1', name: 'Tournevis', price: 2.66, qty: 123 },
    { id: 'a2', name: 'Pelle', price: 3, qty: 78 }
  ])
  const total = computed(() => articles.value.length)
  const add = (newArticle: NewArticle) => {
    console.log('newArticle: ', newArticle)
    const article = { ...newArticle, id: generateId() }
    articles.value.push(article)
  }
  const remove = (ids: string[]) => {
    console.log('ids: ', ids)
    articles.value = articles.value.filter((a) => !ids.includes(a.id))
    console.log('articles.value: ', articles.value)
  }

  return { articles, total, add, remove }
})
