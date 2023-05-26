<template>
  <div>
    <label class="tw-text-sm">Colors</label>

    <div
      class="tw-border tw-space-y-3 tw-rounded tw-border-dashed dark:tw-border-neutral-600 tw-border-neutral-300 tw-p-2 tw-my-2"
    >
      <div>
        <label class="tw-text-xs">Primary color</label>
        <div class="tw-flex tw-gap-2 tw-flex-wrap tw-mt-2">
          <div v-for="c in Object.keys(colors)" :key="c">
            <div
              @click="handleClickPrimary({ name: c, light: colors[c][400], dark: colors[c][600], main: colors[c][500] })"
              :class="[
                c == primary.name && 'tw-ring dark:tw-ring-white tw-ring-black',
              ]"
              :style="{ background: colors[c][500] }"
              class="tw-w-[30px] tw-h-[30px] tw-rounded tw-border tw-border-neutral-700/50 dark:tw-border-neutral-300/50 tw-cursor-pointer"
            ></div>
          </div>
        </div>
      </div>

      <div>
        <label class="tw-text-xs">Secondary color</label>
        <div class="tw-flex tw-gap-2 tw-flex-wrap tw-mt-2">
          <div v-for="c in Object.keys(colors)" :key="c">
            <div
              @click="handleClickSecondary({name: c, light: colors[c][400], dark: colors[c][600], main: colors[c][500] })"
              :class="[
                c == secondary.name && 'tw-ring dark:tw-ring-white tw-ring-black',
              ]"
              :style="{ background: colors[c][500] }"
              class="tw-w-[30px] tw-h-[30px] tw-rounded tw-border tw-border-neutral-700/50 dark:tw-border-neutral-300/50 tw-cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colors from "tailwindcss/colors";


export default {
  props: ['primaryColor', 'secondaryColor'],

  data() {
    return {
      primary: {
          "name": "violet",
          "light": "#8b5cf6",
          "dark": "#a78bfa",
          "main": "#8b5cf6"
      },
      secondary: {
          "name": "emerald",
          "light": "#10b981",
          "dark": "#34d399",
          "main": "#10b981"
      },
    };
  },

  computed: {
    colors() {
      const removed = [
        "black",
        "blueGray",
        "coolGray",
        "current",
        "current",
        "inherit",
        "lightBlue",
        "transparent",
        "trueGray",
        "warmGray",
        "white",
        "gray",
        "neutral",
        "zinc",
        "stone",
      ];
      return Object.fromEntries(
        Object.entries(colors).filter(([c]) => !removed.includes(c))
      );
    },
    options() {
      return this.$store.getters['app/options']
    }
  },

  methods: {
    handleClickPrimary(c) {
      this.primary = c;
      this.$emit('update:primaryColor', c)
      // this.$store.dispatch('app/setPrimary', c)
    },

    handleClickSecondary(c) {
      this.secondary = c
      this.$emit('update:secondaryColor', c)
      // this.$store.dispatch('app/setSecondary', c)
    },
    getOptions() {
      const primary = {
          "name": this.options.find(o => o.option_name == 'primary_color_name').option_value,
          "main": this.options.find(o => o.option_name == 'primary_color_main').option_value,
          "light": this.options.find(o => o.option_name == 'primary_color_light').option_value,
          "dark": this.options.find(o => o.option_name == 'primary_color_dark').option_value,
      }

      const secondary = {
          "name": this.options.find(o => o.option_name == 'secondary_color_name').option_value,
          "main": this.options.find(o => o.option_name == 'secondary_color_main').option_value,
          "light": this.options.find(o => o.option_name == 'secondary_color_light').option_value,
          "dark": this.options.find(o => o.option_name == 'secondary_color_dark').option_value,
      }
      this.primary = primary;
      this.secondary = secondary;
      this.$emit('update:primaryColor', primary)
      this.$emit('update:secondaryColor', secondary)
      this.$store.dispatch('app/setPrimary', primary)
      this.$store.dispatch('app/setSecondary', secondary)
    }
  },

  mounted() {
    this.getOptions();
  }
};
</script>

<style></style>
