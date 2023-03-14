<template>
  <main>
    <h1>Ajouter un article</h1>
    <form>
      <label>
        <span>Nom</span>
        <input type="text" />
      </label>
      <label>
        <span>Prix</span>
        <input type="number" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" />
      </label>
      <button class="primary" type="submit">
        <FaIcon icon="fa-solid fa-plus" />
        <span>Ajouter</span>
      </button>
    </form>
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
