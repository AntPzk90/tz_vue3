<template>
  <header class="header"></header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer"></footer>
</template>

<script></script>

<style>
.header {
  min-height: 100px;
  background: #777;

  @media (max-width: 767px) {
    position: fixed;
    z-index: 3;
    width: 100%;
    top: 0;
    left: 0;
  }
}

.main {
  min-height: calc(100vh - 200px);
  @media (max-width: 767px) {
    padding-top: 100px;
  }
}

.footer {
  min-height: 100px;
  background: #eee;
}
</style>
