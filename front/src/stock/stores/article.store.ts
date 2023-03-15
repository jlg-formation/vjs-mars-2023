import { generateId, sleep } from '@/misc'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Article, NewArticle } from './interfaces/article'

const url = 'http://localhost:3000/api/articles'

export const useArticleStore = defineStore('articles', () => {
  const articles = ref<Article[]>([])
  const isLoading = ref(true)
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

  const load = async () => {
    try {
      console.log('loading...')
      await sleep(2000)
      const response = await fetch(url)
      console.log('response: ', response)
      if (response.status >= 400) {
        throw new Error('Technical Error')
      }
      articles.value = await response.json()
      isLoading.value = false
    } catch (err) {
      console.log('err: ', err)
    }
  }

  load()
  return { articles, isLoading, total, add, remove }
})
