<template>
  <div>
    <client-form :client="client"></client-form>
  </div>
</template>
<script>
import ClientForm from '../components/ClientForm.vue';

export default {
  name: 'CreateClientPage',
  components: {
    ClientForm,
  },
  props: {
    client: {
      type: Object,
      required: true,
      // так как обязательный объект пишем required
    },
  },
};
</script>
