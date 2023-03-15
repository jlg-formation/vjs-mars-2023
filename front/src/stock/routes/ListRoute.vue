<script setup lang="ts">
import { ref } from 'vue'
import { useArticleStore } from '../stores/article.store'
import type { Article } from '../stores/interfaces/article'

const isRefreshing = ref(false)
const isRemoving = ref(false)

const articleStore = useArticleStore()

const selectedArticles = ref(new Set<Article>())

const select = (a: Article) => {
  console.log('a: ', a)
  if (selectedArticles.value.has(a)) {
    selectedArticles.value.delete(a)
    return
  }
  selectedArticles.value.add(a)
}

const remove = async () => {
  isRemoving.value = true
  console.log('remove')
  const ids = [...selectedArticles.value].map((a) => a.id)
  await articleStore.remove(ids)
  await articleStore.refresh()
  selectedArticles.value.clear()
  isRemoving.value = false
}

const onRefresh = async () => {
  isRefreshing.value = true
  await articleStore.refresh()
  isRefreshing.value = false
}
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir" @click="onRefresh" :disabled="isRefreshing">
          <FaIcon
            :icon="'fa-solid ' + (isRefreshing ? 'fa-circle-notch' : 'fa-rotate-right')"
            :spin="isRefreshing"
          />
        </button>
        <RouterLink :to="$route.path + '/add'" class="button" title="Ajouter">
          <FaIcon icon="fa-solid fa-plus" />
        </RouterLink>
        <button
          title="Supprimer"
          :hidden="selectedArticles.size === 0"
          @click="remove"
          :disabled="isRemoving"
        >
          <FaIcon
            :icon="'fa-solid ' + (isRemoving ? 'fa-circle-notch' : 'fa-trash-can')"
            :spin="isRemoving"
          />
        </button>
      </nav>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="articleStore.isLoading">
            <td colspan="3">
              <div class="loading">
                <FaIcon icon="fa-solid fa-circle-notch" :spin="true" />
                <span>Chargement...</span>
              </div>
            </td>
          </tr>
          <tr
            v-else
            v-for="a in articleStore.articles"
            :key="a.id"
            @click="select(a)"
            :class="{ selected: selectedArticles.has(a) }"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price">{{ a.price }} €</td>
            <td class="qty">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss">
div.content {
  display: flex;
  flex-flow: column;
  gap: 1em;
}

nav {
  display: flex;
  gap: 0.3em;
}

table {
  border: 0.1em solid #bbb;
  td,
  th {
    padding: 0.5em 1em;
  }

  thead {
    background-color: #bbb;
  }

  tbody {
    cursor: pointer;
    tr:nth-child(even) {
      background-color: #eee;
    }

    .price,
    .qty {
      text-align: right;
    }

    tr:hover {
      background-color: #ddd;
    }

    tr.selected {
      background-color: #ccc;
    }
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
</style>
