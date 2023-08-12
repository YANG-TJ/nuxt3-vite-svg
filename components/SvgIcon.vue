<template>
  <!-- <div>
    <svg :class="svgClass" v-blind="$attrs" :style="{ color: color }">
      <use :xlink:href="iconName" />
    </svg>
  </div> -->
  <div>
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" :fill="color" />
    </svg>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`); // symbolId
const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`;
  }
  return `svg-icon`;
});
</script>
<style>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
