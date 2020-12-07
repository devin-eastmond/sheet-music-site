<template>
  <div class="jumbotron">
    <h1>{{ pageName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    pageName: String
  }
}
</script>

<style>
.jumbotron {
  color: white;
  background-color: rgb(0, 139, 137);
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
