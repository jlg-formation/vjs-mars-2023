<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useArticleStore } from '../stores/article.store'
import type { NewArticle } from '../stores/interfaces/article'

const isSubmitting = ref(false)
const errorMsg = ref('')

const newArticle = ref<NewArticle>({ name: 'Truc', price: 1, qty: 2 })

const { add, refresh } = useArticleStore()
const router = useRouter()
const route = useRoute()

const onSubmit = async () => {
  try {
    isSubmitting.value = true
    await add(newArticle.value)
    await refresh()
    await router.push(route.matched[0].path)
  } catch (err) {
    errorMsg.value = 'Erreur Technique'
  } finally {
    isSubmitting.value = false
  }
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
      <div class="error">
        {{ errorMsg }}
      </div>
      <button class="primary" type="submit" :disabled="isSubmitting">
        <FaIcon
          :icon="'fa-solid ' + (isSubmitting ? 'fa-circle-notch' : 'fa-plus')"
          :spin="isSubmitting"
        />
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
}

div.error {
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
