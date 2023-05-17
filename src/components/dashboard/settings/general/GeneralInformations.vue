<template>
  <div>
    <div class="tw-grid tw-grid-cols-12">

        <div class="tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
            <label class="tw-text-sm">Name</label>
            <input
            v-model="nameValue" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Product name" type="text">
            <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.name.valid && '!tw-text-red-400']">
            <span v-if="!form.name.valid">
                {{ form.name.valid }}
            </span>
            <span v-else>
                Do not exceed 20 characters when entering the name.
            </span>
            </div>
        </div>

        <div class="tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
            <label class="tw-text-sm">Description</label>
            <textarea
            v-model="descriptionValue"
            :class="{ '!tw-border-red-400': !form.description.valid  }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"
            rows="8"></textarea>
            <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.description.valid && '!tw-text-red-400']">
            <span v-if="!form.description.valid">
                {{ form.description.message }}
            </span>
            <span v-else>
            Do not exceed 300 characters when entering description.
            </span>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
    props: ['name', 'description'],
    emits: ['update:name', 'update:description'],

    data() {
        return {
            form: {
                name: {
                    valid: true,
                    message: ''
                },
                description: {
                    valid: true,
                    message: ''
                }
            }
        }
    },

    computed: {
        nameValue: {
            get() {
                return this.name
            },
            set(v) {
                this.$emit('update:name', v)
            }
        },
        descriptionValue: {
            get() {
                return this.description
            },
            set(v) {
                this.$emit('update:description', v)
            }
        }
    }
}
</script>

<style>

</style>