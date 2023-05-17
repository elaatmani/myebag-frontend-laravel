<template>
  <div>
    <label class="tw-text-sm" :class="[getColorClasses(primary)]">Colors</label>

    <div
      class="tw-border tw-space-y-3 dark:tw-border-neutral-700 tw-border-neutral-200 tw-p-2 tw-my-2"
    >
      <div>
        <label class="tw-text-xs">Primary color</label>
        <div class="tw-flex tw-gap-2 tw-flex-wrap tw-mt-2">
          <div v-for="c in Object.keys(colors)" :key="c">
            <div
              @click="handleClickPrimary(c)"
              :class="[
                c == primary && 'tw-ring dark:tw-ring-white tw-ring-black',
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
              @click="handleClickSecondary(c)"
              :class="[
                c == secondary && 'tw-ring dark:tw-ring-white tw-ring-black',
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
  data() {
    return {
      primary: "violet",
      secondary: "emerald",
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
  },

  methods: {
    handleClickPrimary(c) {
      this.primary = c;
      this.$store.dispatch('app/setPrimary', c)
      // console.log(this.$primary.value);
    },

    handleClickSecondary(c) {
      this.secondary = c
      this.$store.dispatch('app/setSecondary', c)
      // console.log(this.$secondary);
    },

    getColorClasses(color) {
      // Modify this function to return classes based on your requirements
      return `tw-border tw-p-1 tw-rounded tw-bg-${color}-500/10 tw-border-${color}-500 tw-text-${color}-500`;
    }
  },

  mounted() {
    console.table(this.colors);
    console.log(this.$primary);
  }
};
</script>

<style></style>
