<template>
  <ul class="client__list">
    <li class="client__item">{{ client.id }}</li>
    <li class="client__item">{{ client.surname }}</li>
    <li class="client__item">{{ client.lastname }}</li>
    <!-- <li class="client__item">{{ client.phone }}</li> -->
    <li class="client__item">{{ client.email }}</li>
    <li class="client__item">{{ client.linkVK }}</li>
    <!-- <li class="client__item">{{ client.contract }}</li> -->
    <!-- <li class="client__item">{{ client.status }}</li> -->
    <!-- <li class="client__item">{{ client.manager }}</li> -->
    <router-link
      tag="button"
      :to="{name:'editClient', params: {id: client.id}}">
        <button>Редактировть данные клиента</button>
    </router-link>
  </ul>
</template>
<script>

export default {
  name: 'ClientPage',
  components: {},
  data() {
    return {
      client: null,
    };
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.loadClient();
      },
      immediate: true,
    },
  },
  methods: {
    loadClient() {
      this.$http
        .get(`client/${this.$route.params.id}`)
        .then((response) => {
          this.client = response.data;
        });
    },
  },
};
</script>
