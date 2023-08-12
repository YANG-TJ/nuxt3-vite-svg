<template>
  <div class="myClass">
    <svg-icon
      v-if="currentIconSvg !== 'refresh'"
      :name="currentIconSvg"
    ></svg-icon>
    <svg-icon v-else name="refresh"></svg-icon>
    <section v-if="currentIconSvg !== 'refresh'">
      <h3>目前天氣</h3>
      <p>
        {{ currentIconSvg }}
      </p>
      <small>代號({{ currentIconCode }})</small>
    </section>
    <section v-else>
      <h3>請選擇天氣</h3>
    </section>
    <SwitchToSvg
      @handeChangeTag="handeChangeTag"
      @handleCurrentIconCode="handleCurrentIconCode"
    />
  </div>
</template>
<script lang="ts" setup>
const { currentIconCode, currentIconSvg } = useIcons();
const handleCurrentIconCode = (code: number) => {
  currentIconCode.value = code;
};
const handeChangeTag = (val: string) => {
  currentIconSvg.value = val;
};
</script>
<style scoped>
.myClass {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 600px;
  margin: auto;
  margin-top: 60px;
}
section {
  text-align: center;
  display: inline;
  gap: 1px;
}
p {
  line-height: 5px;
}
small {
  margin-left: 5px;
}
</style>
