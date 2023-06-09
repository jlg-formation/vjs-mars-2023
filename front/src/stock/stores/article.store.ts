import { sleep } from '@/misc'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Article, NewArticle } from './interfaces/article'
import { config } from '../../conf'

const url = config.domainUrl + '/api/articles'

export const useArticleStore = defineStore('articles', () => {
  const articles = ref<Article[]>([])
  const isLoading = ref(true)
  const errorWhenLoading = ref(false)
  const total = computed(() => articles.value.length)
  const add = async (newArticle: NewArticle) => {
    try {
      console.log('newArticle: ', newArticle)

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArticle)
      })
      console.log('response: ', response)
    } catch (err) {
      console.log('err: ', err)
      throw new Error('Technical Error')
    }
  }

  const refresh = async () => {
    await load()
  }

  const remove = async (ids: string[]) => {
    console.log('ids: ', ids)
    try {
      await sleep(300)
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
      })
      console.log('response: ', response)
      if (response.status >= 400) {
        throw new Error('Technical Error')
      }
    } catch (err) {
      console.log('err: ', err)
      throw new Error('Technical Error')
    }
  }

  const load = async () => {
    try {
      console.log('loading...')
      errorWhenLoading.value = false
      await sleep(2000)
      const response = await fetch(url)
      console.log('response: ', response)
      if (response.status >= 400) {
        throw new Error('Technical Error')
      }
      articles.value = await response.json()
    } catch (err) {
      console.log('err: ', err)
      errorWhenLoading.value = true
      throw new Error('Technical Error')
    } finally {
      isLoading.value = false
    }
  }

  load().catch(() => {})
  return { articles, isLoading, errorWhenLoading, total, add, remove, refresh }
})
