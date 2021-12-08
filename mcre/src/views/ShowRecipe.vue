<template>
    <div>
  <v-btn class="ma-2 noprint" @click="print"><v-icon>mdi-printer</v-icon></v-btn>
  <v-container id='theRecipe' class='recipe'>
      <h1>{{ recipe.name }}</h1>
      <p v-for='para in recipe.about' :key='para' class='about'>{{ para }}</p>
      <v-divider/>
      <div v-for='(step, stepNum) in recipe.steps'  :key='stepNum'>
        <v-row class='step'>
          <v-col key='ing' col='4'>
              <v-container>
                  <v-row no-gutters v-for='(ing, ingNum) in step.ingredients' :key='ingNum'>
                      <v-col no-gutters col='4' key='matl'>{{ing.material}}</v-col>
                      <v-col no-gutters col='1' key='qant'><vue-mathjax v-if='ing.quantity' :formula='fmtNum(ing.quantity)'></vue-mathjax> {{(ing.unit ? ing.unit : '')}}</v-col>
                  </v-row>
              </v-container>
          </v-col>
          <v-col no-gutters key='time' cols='1'>{{step.time}}</v-col>
          <v-col no-gutters key='temp' cols='1'>{{step.temp}}</v-col>
          <v-col no-gutters key='procedure' cols='6'>{{step.procedure}}</v-col>
        </v-row>
        <v-divider/>
      </div>
  </v-container>
    </div>
</template>

<style scoped>
.recipe {
    width: 7.2in;
}
.about {
    width: 50%;
    font-size: 72%;
    font-family: serif;
    font-style: italic;
    margin-bottom: 0.5em;
}
.step {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}
.qant {
    text-align: justify;
    text-justify: inter-word;
}
span.buffer {
    display:block;
    overflow:hidden;
    width:100%;
    height:100%;
}
.step {
    font-size: 62%;
}
</style>

<script>
import { mapGetters } from "vuex";
import { VueMathjax } from 'vue-mathjax'

export default {
    name: 'ShowRecipe',
    components: {
        'vue-mathjax': VueMathjax
    },

    props: {
        id: String
    },

    data: () => ({
    }),

    computed: {
        ...mapGetters({recipe: "getRecipe"}),
        recipe: function()  {
            return this.$store.state.app.cache[this.id];
        }
    },

    methods: {
        fmtNum: function(x) {
            if (x == 0.0625) {
                return "$ \\frac{1}{16} $";
            }
            if (x == 0.125) {
                return "$ \\frac{1}{8} $";
            }
            if (x == 0.25) {
                return "$ \\frac{1}{4} $";
            }
            if (Math.abs(x - 1/3) < 1e-3) {
                return "$ \\frac{1}{3} $";
            }
            if (x == 0.5) {
                return "$ \\frac{1}{2} $";
            }
            if (Math.abs(x - 2/3) < 1e-3)  {
                return "$ \\frac{2}{3} $";
            }
            if (x == 0.75) {
                return "$ \\frac{3}{4} $";
            }
            return `$ ${x} $`;
        },

        async print () {
            // Pass the element id here
            window.print();
        }
    },
  };
</script>
