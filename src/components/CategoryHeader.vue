<template>
  <div class="col d-flex align-items-center">
    <div class="ratio ratio-1x1 float-end" style="width: 100px">
      <img :src="`/images/icon_${category.toLowerCase()}.svg`" alt="" />
    </div>
    <h2 class="page-title ms-2 me-auto">{{ category }}</h2>

    <img :src="`/images/il_${category.toLowerCase()}.svg`" width="200" :alt="category" class="ms-auto" />
  </div>
</template>

<script>
export default {
  props: { category: String },
};
</script>
