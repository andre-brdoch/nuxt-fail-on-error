<template>
  <div class="container">
    <h1>Hello World</h1>
  </div>
</template>

<script>
export default {
  // async asyncData() {
  //   const arr = [1, 2, 3];
  //   // sort is not defined:
  //   const sorted = sort(arr);
  //   return { sorted };
  // }

  fetch() {
    const arr = [1, 2, 3];
    // sort is not defined:
    this.sorted = sort(arr);
  }
};
</script>
