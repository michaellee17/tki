<template>
  <div class="pagination">
    <ul class="d-flex ms-auto">
      <li><a href="#">&lt;</a></li>
      <li><a href="#" class="active">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">&gt;</a></li>
    </ul>
  </div>
</template>

<style scoped>
.pagination li{
  padding: 5px;
}
.pagination li a.active{
  color: var(--primary-color);
}
</style>