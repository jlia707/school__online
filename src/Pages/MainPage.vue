<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог клиентов</h1>
      <span class="content__info"> 100 клиентов </span>
    </div>
    <div class="content__catalog">
      <section class="catalog">
        <client-list/>
      </section>
    </div>
  </main>
</template>
<script>
import ClientList from '../components/ClientList.vue';

export default {
  components: { ClientList },
  name: 'MainPage',
};

</script>
