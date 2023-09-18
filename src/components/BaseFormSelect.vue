<template>
  <base-form-field-vue :title="title" :error="error" :name="name">
    <label for="select">
      <select
        v-model="selected"
        class="form__input form__input--area"
        name="select"
        placeholder="Статус ученика"
      >
        <option disabled value="">Please select one</option>
        <option
          v-for="(option, index) in options"
          v-bind:value="option.value"
          :key="index"
        >{{ option.value }}</option>
      </select>
    </label>
  </base-form-field-vue>
</template>
<script>
import BaseFormFieldVue from '@/components/BaseFormField.vue';

export default {
  components: { BaseFormFieldVue },
  props: ['title', 'error', 'placeholder', 'name', 'value'],
  data() {
    return {
      selected: '',
      options: [
        { value: 'Холодный клиент' },
        { value: 'Требует повторного прозвона' },
        { value: 'Перезвонить' },
        { value: 'Ученик' },
        { value: 'Бывший ученик' },
      ],
    };
  },
  computed: {},
};
</script>
<style>
.form__input {
  color: black;
}
</style>
