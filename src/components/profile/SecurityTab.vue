<template>
  <div class="tw-flex tw-h-full tw-flex-col">
    <div class="tw-w-full tw-mb-5">Security</div>
    <div class="tw-w-full">
                <div class="tw-grid tw-grid-cols-12 tw-w-full tw-gap-x-5 tw-gap-y-3 tw-text-sm">
                    <div class="md:tw-col-span-12 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="firstname">Old Password</label>
                          <input v-model="oldPassword" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="lastname">New Password</label>
                          <input v-model="newPassword" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="phone">Confirm Password</label>
                          <input v-model="confirmPassword" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    </div>
            </div>
            <v-spacer></v-spacer>

        <div class="tw-w-full tw-flex tw-justify-end tw-mt-10">
          <button @click="handleSave" class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center">
              <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
              <span>Save</span>
          </button>
        </div>
  </div>
</template>

<script>
import User from '@/api/User'
export default {
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',

      isLoading: false,
    }
  },

  methods: {
    handleSave() {
      if(!this.validate()) {
        return false;
      }
      this.isLoading = true
      const user = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword,
      }
      User.updatePassword(user)
      .then(
        res => {
          if(res.data.code == 'VALIDATION_ERROR') {
            this.$alert({
              type: 'warning',
              body: res.data.message
            })
          }

          if(res.data.code == 'SUCCESS') {
            this.$alert({
                body: 'Informations updated successfuly',
                type: 'success'
            })
          }
        }
      ).finally(
        () => {
          this.isLoading = false
        }
      )
    },

    validate() {
      if(this.oldPassword == '') {
        this.$alert({
          type: 'warning',
          body: 'Old password should not be empty'
        })
        return false;
      }

      if(this.newPassword == '') {
        this.$alert({
          type: 'warning',
          body: 'New password should not be empty'
        })
        return false;
      }

      if(this.newPassword != this.confirmPassword) {
        this.$alert({
          type: 'warning',
          body: 'Confirm password doesn\'t match new password'
        })
        return false;
      }

      return true;
    }
  }
}
</script>

<style>

</style>