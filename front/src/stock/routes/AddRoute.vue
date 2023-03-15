<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useArticleStore } from '../stores/article.store'
import type { NewArticle } from '../stores/interfaces/article'

const newArticle = ref<NewArticle>({ name: 'Truc', price: 1, qty: 2 })

const { add, refresh } = useArticleStore()
const router = useRouter()
const route = useRoute()

const onSubmit = async () => {
  await add(newArticle.value)
  await refresh()
  router.push(route.matched[0].path)
}
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form v-on:submit.prevent="onSubmit">
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" />
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="newArticle.price" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="newArticle.qty" />
      </label>
      <button class="primary" type="submit">
        <FaIcon icon="fa-solid fa-plus" />
        <span>Ajouter</span>
      </button>
    </form>
    <!-- <div>{{ newArticle }}</div> -->
  </main>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-flow: column;
  gap: 0.5em;

  width: 100%;
  max-width: 25em;

  label {
    display: flex;
    flex-flow: column;

    input {
      padding: 0.5em 1em;
      border: 0.1em solid #bbb;
      border-radius: var(--border-radius);
    }
  }

  button {
    margin-top: 3em;
  }
}
</style>
