<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Users</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">List of all users</p>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-pb-0 tw-gap-2">
        <div class="tw-col-span-12">
          <div>
            <UsersTable :isLoaded="isLoaded" :allItems="users" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersTable from '@/components/dashboard/user/UsersTable.vue'
import User from '@/api/User'

export default {
  components: { UsersTable },

  data() {
    return {
      isLoaded: false
    }
  },

  computed: {
    users() {
      return this.$store.getters['user/users']
    }
  },

  methods: {
    getUsers() {
      this.isLoaded = false
      User.all()
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$store.dispatch('user/setUsers', res.data.data.users)
          }
        },
        this.$handleApiError
      )
      .finally(
        () => {
          this.isLoaded = true
        }
      )
    }
  },

  mounted() {
    this.getUsers()
  }
}
</script>

<style>

</style>