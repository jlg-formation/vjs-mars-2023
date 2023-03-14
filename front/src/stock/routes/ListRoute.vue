<script setup lang="ts">
import { useArticleStore } from '../stores/article.store'

const { articles } = useArticleStore()
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir">
          <FaIcon icon="fa-solid fa-rotate-right" />
        </button>
        <RouterLink :to="$route.path + '/add'" class="button" title="Ajouter">
          <FaIcon icon="fa-solid fa-plus" />
        </RouterLink>
        <button title="Supprimer">
          <FaIcon icon="fa-solid fa-trash-can" />
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
          <tr v-for="a in articles" :key="a.id">
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
</style>
