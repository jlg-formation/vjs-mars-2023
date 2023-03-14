<template>
  <header>
    <RouterLink to="/">
      <img src="/public/logo.svg" alt="Logo Gestion Stock" />
      <span>Gestion Stock</span>
    </RouterLink>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 3em;
  padding: 0 0.5em;
  background-color: #eee;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;

    text-decoration: inherit;
    color: inherit;

    span {
      font-size: 1.3em;
      font-weight: bold;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

img {
  height: 2.5em;
}
</style>
