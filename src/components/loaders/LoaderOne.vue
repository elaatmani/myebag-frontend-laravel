<template>
  <div class="tw-scale-75">
    <div class="custom-loader"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.custom-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,rgb(var(--primary)) 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,rgb(var(--primary)));
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;
}

@keyframes s3{ 
  100%{transform: rotate(1turn)}
}
</style>