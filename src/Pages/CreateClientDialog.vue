<template>
  <v-dialog :value="true" width="500">
    <v-card @submit.prevent="personalData">
      <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="2"
        >
          <v-text-field
            v-model="form.name"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="2"
        >
          <v-text-field
            v-model="form.surname"
            label="Surname"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="2"
        >
          <v-text-field
            v-model="form.lastName"
            label="LastName"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="form.contacts"
            label="Contats"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <div class="create-client-buttons">
    <button @click="onSubmit"> Отправить форму </button>
    <button v-on:click="closeForm"> Закрыть форму </button>
  </div>

    </v-card>
  </v-dialog>
</template>
<script>
</script>
