<template>
  <div>
    <button @click="handleIconChange(emits)">換天氣</button>
  </div>
</template>
<script lang="ts" setup>
const { handleIconChange } = useIcons();
const emits = defineEmits(["handeChangeTag", "handleCurrentIconCode"]); // defineEmites 和 defineProps 皆需寫在 script setup中
onMounted(() => {
  handleIconChange(emits);
});
</script>
<style scoped>
:global(:root) {
  --first-color: #9477ff;
}
button {
  background-color: white;
  border: 1px solid var(--first-color);
  border-radius: 5px;
  color: var(--first-color);
  padding: 10px 15px;
  cursor: pointer;
}
button:hover {
  color: white;
  background-color: var(--first-color);
}
</style>
