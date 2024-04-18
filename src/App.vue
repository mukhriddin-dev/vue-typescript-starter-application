<template>

  <div>
    <h1>Hello</h1>
    <TanStackDevTool />
  </div>

</template>

<script setup lang="ts">
import { TanStackDevTool } from '@utils';
import { useFetch } from "./services";

const data = useFetch()
</script>

<style scoped></style>
