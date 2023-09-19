<template>
  <div>
    <section class="cart">
      <form
        class="cart__form form"
        action="#"
        method="POST"
        @submit.prevent="onSubmit"
      >
        <div class="cart__field">
          <div class="cart__data">
            <base-form-text-vue
              v-model="formData.surname"
              :error="formError.surname"
              title="Фамилия"
              name="surname"
              placeholder="Введите вашу фамилию"
            >
            </base-form-text-vue>

            <base-form-text-vue
              v-model="formData.name"
              :error="formError.name"
              title="Имя"
              name="name"
              placeholder="Введите ваше имя"
            >
            </base-form-text-vue>

            <base-form-text-vue
              v-model="formData.lastname"
              :error="formError.lastname"
              title="Отчество"
              name="lastname"
              placeholder="Введите ваше отчество"
            >
            </base-form-text-vue>
<!--
            <base-form-text-vue
              v-model="formData.phone"
              :error="formError.phone"
              title="Телефон"
              name="phone"
              placeholder="Введите ваш телефон"
            >
            </base-form-text-vue> -->

            <base-form-text-vue
              v-model="formData.email"
              :error="formError.email"
              title="Email"
              name="email"
              placeholder="Введите ваш Email"
            >
            </base-form-text-vue>

            <base-form-text-vue
              v-model="formData.linkVK"
              :error="formError.linkVK"
              title="Адрес ссылки ВКонтакте"
              name="linkVK"
              placeholder="Вставте ссылку на аккаунт в контакте"
            >
            </base-form-text-vue>

            <!-- <base-form-text-vue
              v-model="formData.contract"
              :error="formError.contract"
              title="Номер договора"
              name="contract"
              placeholder="Введите номер договора"
            >
            </base-form-text-vue> -->

            <base-form-select-vue
              v-model="formData.option"
              :error="formError.option"
              title="Статус ученика"
              name="status"
              placeholder="Выберетите статус ученика"
            >
              <!-- компонет select будет общим , менятся будет связь пропсов -->
              <!-- :status="status" статус берем из store-->
            </base-form-select-vue>

            <base-form-select-vue
              v-model="formData.option"
              :error="formError.option"
              title="Ответственный менеджер"
              name="status"
              placeholder="Выберетите статус ученика"
            >
              <!-- компонет select будет общим , менятся будет связь пропсов -->
              <!-- :manager="manager"  берем из store-->
              <!-- В этот компонент передаем через ation и пропсом передадим в компонент селекта -->
            </base-form-select-vue>

            <base-form-text-area-vue
              v-model="formData.comment"
              :error="formError.comment"
              title="Комментарий"
              name="comment"
              placeholder="Дополнительные сведения по ученику"
            >
            </base-form-text-area-vue>
          </div>
        </div>

        <button type="submit" class="cart__button button button--primery">
          Отправить данные ученика
        </button>
      </form>
    </section>
  </div>
</template>
<script>
import BaseFormTextVue from '@/components/BaseFormText.vue';
import BaseFormTextAreaVue from '@/components/BaseFormTextArea.vue';
import BaseFormSelectVue from './BaseFormSelect.vue';

export default {
  components: { BaseFormTextVue, BaseFormTextAreaVue, BaseFormSelectVue },
  // props: {
  //   client: {
  //     type: Object,
  //     required: true,
  //     // так как обязательный объект пишем required
  //   },
  // },
  data() {
    return {
      formData: {},
      formError: {},
    };
  },
  methods: {
    submitPersonalData() {
      console.log(this.formData);
      this.$http.post('client', this.formData).then(() => {
        this.$store.dispatch('GET_CLIENTS_FROM_API');
      });
    },
  },
  closeForm() {
    this.$emit('close');
  },
  updatePersonal() {
    console.log(this.formData);
    this.$http.patch(`clients/${this.formData.id}`, this.formData).then(() => {
      this.$store.dispatch('GET_CLIENTS_FROM_API');
    });
  },
  onSubmit() {
    if (this.formData.id) {
      this.updatePersonal();
    } else {
      this.submitPersonalData();
    }
  },
  created() {
    if (this.client != null) {
      this.form = {
        ...this.client,
        // объекты и массивы присваивают значение по ссылке
        // для копи нужен спред оператор
        // и тогда ссылка не будет изменена
      };
    }
  },
};
</script>
<style scoped>
.cart__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.cart__data {
  display: flex;
  flex-direction: column;
}
.button {
  margin: 0;
  border: 0;
  font: inherit;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  padding: 25px 15px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  vertical-align: middle;
  text-transform: uppercase;
  cursor: pointer;
}
.button--primery {
  background-color: #9eff00;
  border: 1px solid #9eff00;
  font-family: "PressStart";
  color: #222;
  font-size: 13px;
}
.button--primery:not(:disabled):focus,
.button--primery:not(:disabled):hover {
  background-color: transparent;
  color: #fff;
}
.cart__button {
  margin-top: 20px;
  width: 100%;
}
</style>
