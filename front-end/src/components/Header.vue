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
  background-color: rgb(60, 60, 60);
  padding-top: 40px;
  padding-bottom: 40px;
  border-width: 0px 0px 2px 0px;
  border-color: rgb(171 16 31);
  border-style: solid;
  border-radius: 0px;
}
</style>
