<template>
  <div class="rectangle">
    <center>
      <div class="loader"><div class="mover"></div></div>
    </center>
  </div>
</template>

<style>
  .loader {
    background-image: url('../../public/images/treble.png');
    /* background-color: red; */
    background-repeat: no-repeat;
    height: 360px;
    width: 150px;
    /*border: 16px solid #f3f3f3; /* Light grey */
    /*border-top: 16px solid rgb(0, 111, 139); /* Blue */
    /*border-radius: 50%;*/
    /*width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;*/
  }
  .mover {
    background-color: rgb(0, 111, 139);
    height: 5px;
    width: 5px;
    animation: clefAnimation 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes clefAnimation {
    /* 0% {
      transform: translate(-6px, 242px) rotate(45deg) scale(3.0, 2.0);
    } */
    /* 50% {
      transform: translate(-6px, 128px) rotate(495deg) scale(3.0, 4.3);
    } */
    /* 75% {
      transform: translate(20px, 242px) rotate(262deg) scale(3.0, 1.7);
    } */
    0% {
      transform: translate(0px, 150px) rotate(255deg) scale(3.0, 1.7);
    }
    100% {
      transform: translate(20px, 242px) rotate(262deg) scale(3.0, 1.7);
    }
  }

  center {
    margin: 100px;
  }
</style>
