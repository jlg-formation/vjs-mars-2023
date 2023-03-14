<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button>Rafraîchir</button>
        <RouterLink :to="$route.path + '/add'" class="button">Ajouter</RouterLink>
        <button>Supprimer</button>
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
          <tr>
            <td class="name">Tournevis</td>
            <td class="price">3.99 €</td>
            <td class="qty">15</td>
          </tr>
          <tr>
            <td class="name">Pelle</td>
            <td class="price">7.50 €</td>
            <td class="qty">8</td>
          </tr>
          <tr>
            <td class="name">Marteau</td>
            <td class="price">1.50 €</td>
            <td class="qty">100</td>
          </tr>
          <tr>
            <td class="name">Bêche</td>
            <td class="price">16.00 €</td>
            <td class="qty">50</td>
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
