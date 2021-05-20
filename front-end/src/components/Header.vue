<template>
  <div class="jumbotron" style="background-image: url('images/pattern.png');">
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
  border-width: 2px;
  border-color: rgb(0, 107, 106);;
  border-style: solid;
  border-radius: 0px;
}
</style>
