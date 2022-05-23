<template>
  <div class="jumbotron" style="background-image: url('images/header.jpeg');">
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
  border-width: 0px 0px 3px 0px;
  /* border-color: rgb(129, 0, 0); */
  border-style: solid;
  border-radius: 0px;
  border-color: #c82333;
  background-size: cover;
  background-position: left bottom; /*Positioning*/
  background-repeat: no-repeat; /*Prevent showing multiple background images*/
}

.jumbotron h1 {
  font-style: bold;
  font-size: 45px;
  text-shadow: 2px 2px 8px #55555566;
}
</style>
