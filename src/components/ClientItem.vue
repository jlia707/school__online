<template>
  <li class="catalog__item">
    <router-link
      class="catalog__pic"
      href="#"
      :to="{name: 'client', params: {id: client.id}}"
    >
    <ul class="client__list">
      <li class="client__item">{{ client.id }}</li>
      <li class="client__item">{{ client.surname }}</li>
      <li class="client__item">{{ client.lastname }}</li>
      <!-- <li class="client__item">{{ client.phone }}</li> -->
      <!-- <li class="client__item">{{ client.status }}</li> -->
      <!-- <li class="client__item">{{ client.manager }}</li> -->
    </ul>
    <button>Перейти в карточку клиента</button>
    </router-link>
  </li>
</template>

<script>

export default {
  name: 'ProducItem',
  components: {},
  props: {
    client: {
      type: Object,
      required: true,
      // так как обязательный объект пишем required
    },
  },
  data() {
    return {
    };
  },
  methods: {
    sentIdClient() {
      this.$emit('changed');
    },
  },
};
</script>
<style scoped>
.catalog__item {
  list-style-type: none;
}
.client__list{
  display: flex;
  flex: auto;
  justify-content: space-between;
  list-style-type: none;
}
</style>
