<template>
  <div class="tw-h-full tw-min-h-fit">
    
    <AvatarSwitcher v-model:visible="avatarSwitcher" v-model:avatar="avatar" />

    <div class="tw-flex tw-h-full tw-flex-col">
    <div class="tw-mb-5">Profile</div>
      <div class="tw-w-full">
        <div class="tw-flex lg:tw-flex-row tw-flex-col tw-gap-10">
            <div class="tw-flex tw-flex-col tw-items-center tw-gap-3 tw-w-fit">

                <img :src="$frontend(`assets/images/avatars/${avatar}.webp`)" class="tw-w-[100px] tw-h-[100px] tw-rounded-full">
                <v-btn @click="avatarSwitcher = true" class="tw-capitalize"  variant="text" :color="$primaryRaw.value.main">Change Avatar</v-btn>
            </div>
            <div class="tw-w-full">
                <div class="tw-grid tw-grid-cols-12 tw-w-full tw-gap-x-5 tw-gap-y-3 tw-text-sm">
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="firstname">First name</label>
                          <input v-model="firstname" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="lastname">Last name</label>
                          <input v-model="lastname" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="phone">Phone number</label>
                          <input v-model="telephone" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="email">Email</label>
                          <input v-model="email" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"  type="email">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
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
  </div>
</template>

<script>
import AvatarSwitcher from '@/components/profile/AvatarSwitcher'
import User from '@/api/User'

export default {
  components: {AvatarSwitcher},
    data() {
      return {
        firstname: '',
        lastname: '',
        telephone: '',
        email: '',
        avatar: 3,

        avatarSwitcher: false,
        isLoading: false,

      }
    },
    computed: {
      isDarkMode() {
        return this.$store.getters['theme/isDarkMode']
      },
      user() {
        return this.$store.getters['user/user']
      }
    },

    methods: {
      handleSave() {
        if(!this.validate()) {
          this.$alert({
                body: 'Please fill out the form',
                type: 'info'
              })
          return false;
        }
        this.isLoading = true
        const user = {
          id: this.user.id,
          firstname: this.firstname,
          lastname: this.lastname,
          telephone: this.telephone,
          email: this.email,
          avatar: this.avatar
        }

        User.update(user)
        .then(
          res => {
            if(res.data.code  == 'VALIDATION_ERROR') {
              this.$alert({
                body: 'Email already been taken',
                type: 'warning'
              })
            }

            if(res.data.code == 'SUCCESS') {
              this.$alert({
                body: 'Informations updated successfuly',
                type: 'success'
              })
              this.$store.dispatch('user/setUser', res.data.data.user)
              this.getInfo()
            }
          }
        )
        .finally(
          () => {
            this.isLoading = false
          }
        )
      },
      validate() {
          return !!this.firstname && !!this.lastname && !!this.email
      },

      getInfo() {
        this.firstname = this.user.firstname
        this.lastname = this.user.lastname
        this.telephone = this.user.telephone
        this.email = this.user.email
        this.avatar = this.user.avatar
      }
    },


    mounted() {
      this.getInfo()
    }
}
</script>

<style>

</style>