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
   height:4px;
   width:130px;
   background:
    linear-gradient(#6354a4 0 0),
    linear-gradient(#6354a4 0 0),
    #E4E4ED;
  background-size: 60% 100%;
  background-repeat: no-repeat;
  animation: p6 3s infinite;
}

@keyframes p6 {
  0%   {background-position:-150% 0,-150% 0}
  66%  {background-position: 250% 0,-150% 0}
  100% {background-position: 250% 0, 250% 0}
}
</style>