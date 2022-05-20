<template>
  <footer >
      <!-- <a class="btn-link" href="/admin">Admin </a> -->
      <!-- <span>Click <a class="btn-link" href="https://github.com/devinator9876/sheet-music-vue.git" target="_blank">here</a> to visit my GitHub page</span> -->
      <div class="footer"><p>Copyright © 2022 - Devin Eastmond</p></div>
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
  padding: 5px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  /* background-color: rgb(0, 67, 84); */
  background-color: rgb(139, 0, 0);
  margin-top: 20px;
  border-top: 7px solid #9c0000;
}

.footer {
  color: rgb(200, 200, 200);
  text-align: center;
}

.footer a {
  color: rgb(200, 200, 200);
}
</style>
