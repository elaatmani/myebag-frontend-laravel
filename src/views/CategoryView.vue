<template>
  <div>

    <loading></loading>
  </div>
</template>

<script>
import Category from '@/api/Category';
export default {
  data() {
    return {
      isLoaded: false,
      category: null
    }
  },

  watch: {
    $route(newValue) {
      console.log(newValue);
    }
  },

  computed: {
    id() {
      return this.$route.params.id
    }
  },

  methods: {
    getCategory() {
      return Category.get(this.id)
      .then(
        res => {
          console.log(res.data);
        },
        this.$handleApiError
      )
    }
  },

  mounted() {
    console.log('id: ', this.id);
    this.getCategory()
  }
}
</script>

<style scoped>

</style>