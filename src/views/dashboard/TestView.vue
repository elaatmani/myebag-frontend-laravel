<template>
  <div>
    <h2 class="tw-mb-3 tw-text-lg">Test</h2>
    <div class="tw-w-full pa-5 tw-h-[500px] dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      
      <v-btn @click="sendRequest" class="tw-capitalize" :loading="isLoading" variant="flat" color="primary">Send Request</v-btn>

        <div class="pt-3">
            <p class="tw-flex tw-items-center tw-gap-2">
                <span class="tw-py-2 tw-px-3">
                    Method: 
                </span>
                <span class="tw-py-1 tw-px-3 tw-rounded-md tw-bg-green-500/10 tw-text-green-500">
                    {{ method }}
                </span>
            </p>
            <p class="tw-flex tw-items-center mt-2 tw-gap-2">
                <span class="tw-py-2 tw-px-3">
                    Path: 
                </span>
                <span class="tw-py-1 tw-px-3 tw-rounded-md tw-bg-blue-500/10 tw-text-blue-500">
                    {{ path }}
                </span>
            </p>
            <p class="tw-py-1 tw-px-3 mt-2">
                Data:
            </p>
        </div>

      <div class="tw-py-1 tw-px-3">
            {{ test }}
      </div>
    </div>
  </div>
</template>

<script>
import test, {path, method} from '@/helpers/request'
import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

export default {
    data() {
        return {
            isLoading: false,
            test, method, path
        }
    },
    mounted() {
        console.log(this.$handleApiError);
    },
    methods: {
        async sendRequest() {
            this.isLoading = true
            await Csrf.getCookie()
            .catch(
                err => {
                    console.log(err);
                }
            )
            switch (method) {
                case 'get':
                    Api.get(path)
                    .then(
                        res => {
                            console.log('---- Success Response ----');
                            console.log(`---- Code ${res.status} ----`);
                            console.log(res.data);
                        }
                    )
                    .catch(
                        err => {
                            this.$handleApiError(err);
                            console.log('---- Failed Response ----');
                            console.log(`---- Code ${err?.response.status} ----`);
                            console.log(err?.response?.data);
                        }
                    )
                    .finally(() => this.isLoading = false)
                break;
                case 'post':
                    Api.post(path, test)
                    .then(
                        res => {
                            console.log('---- Success Response ----');
                            console.log(`---- Code ${res.status} ----`);
                            console.log(res.data);
                        }
                    )
                    .catch(
                        err => {
                            this.$handleApiError(err);
                            console.log('---- Failed Response ----');
                            console.log(`---- Code ${err?.response.status} ----`);
                            console.log(err?.response?.data);
                        }
                    )
                    .finally(() => this.isLoading = false)
                break;
                case 'delete':
                    Api.delete(path)
                    .then(
                        res => {
                            console.log('---- Success Response ----');
                            console.log(`---- Code ${res.status} ----`);
                            console.log(res.data);
                        }
                    )
                    .catch(
                        err => {
                            this.$handleApiError(err);
                            console.log('---- Failed Response ----');
                            console.log(`---- Code ${err?.response.status} ----`);
                            console.log(err?.response?.data);
                        }
                    )
                    .finally(() => this.isLoading = false)
                break;
            
                default:
                    break;
            }
        }
    }
}
</script>

<style>

</style>