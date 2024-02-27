<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Abu Saebu. All rights reserved. </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  text-align: center;
}
</style>
