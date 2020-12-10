<template>
  <footer class="footer">
    <div class="container">
      <a class="btn-link" href="/admin">Admin </a>
      <span>Click <a class="btn-link" href="https://github.com/devinator9876/sheet-music-vue.git" target="_blank">here</a> to visit my GitHub page</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: rgb(0, 67, 84);
  margin-top: 20px;
}

.footer span {
  color: rgb(157, 157, 157);
  text-align: left;
}
</style>
