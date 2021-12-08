<template>
  <v-app>
    <v-navigation-drawer app class="noprint">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>MCRE</v-list-item-title>
            <v-list-item-subtitle>Modernist Cuisine Recipe Editor</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <router-link :to="{name: 'home'}">Home</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="noprint">
      <router-link :to="{name: 'show', params: {id: '1'}}">Recipe 1</router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
@media print {
      ::v-deep .right-sidebar,
      ::v-deep header {
        display: none !important;
      }
     ::v-deep footer {
      display: none !important;
     }
     .noprint {
       display: none !important;
     }
     body {
       font-size: 11pt;
     }
}
</style>>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
