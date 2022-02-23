<template>
  <h1>Hello Vue!</h1>
</template>

<script>
export default {
  name: "hellovue",
  data() {
    return {
        msg: "My hello vue!",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
  font-size: 20px;
}
</style>