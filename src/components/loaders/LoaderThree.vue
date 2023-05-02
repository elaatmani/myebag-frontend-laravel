<template>
  <div>
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
  border: 8px solid #0000;
  border-right-color: #6354a497;
  position: relative;
  animation: s4 1s infinite linear;
}
.custom-loader:before,
.custom-loader:after {
  content: "";
  position: absolute;
  inset:-8px;
  border-radius: 50%;
  border:inherit;
  animation:inherit;
  animation-duration: 2s;
}
.custom-loader:after {
  animation-duration: 4s;
}

@keyframes s4 {
  100% {transform: rotate(1turn)}
}

</style>