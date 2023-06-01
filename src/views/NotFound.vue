<template>
    <section class="tw-flex tw-items-center tw-h-full tw-p-16 tw-rounded-lg dark:tw-bg-neutral-900 dark:tw-text-gray-100">
		<div class="container tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-5 tw-mx-auto tw-my-8">
			<div class="tw-max-w-md tw-text-center">
				<h2 class="tw-mb-8 tw-font-extrabold tw-text-9xl tw-text-[rgb(var(--primary))]">
					<span class="tw-sr-only">Error</span>404
				</h2>
				<p class="tw-text-2xl tw-font-semibold md:tw-text-3xl">Sorry, we couldn't find this page.</p>
				<p class="tw-mt-4 tw-mb-8 dark:tw-text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
				<router-link rel="noopener noreferrer" :to="{name: 'home'}" class="tw-px-8 tw-py-3 tw-font-semibold tw-rounded tw-bg-[rgb(var(--primary))] tw-text-neutral-100">Back to homepage</router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style>

</style>