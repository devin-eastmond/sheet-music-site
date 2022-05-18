<template>
  <div class="jumbotron" style="background-image: url('images/pattern3.png');">
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
  padding-top: 50px;
  padding-bottom: 50px;
  border-width: 0px 0px 2px 0px;
  border-color: rgb(30, 30, 30);
  border-style: solid;
  border-radius: 0px;
}
</style>
