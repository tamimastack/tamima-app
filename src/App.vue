<template>
  <router-view />
</template>

<script setup lang="ts">
// App component logic
</script>

<style>
/* إعدادات عامة */
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

body {
  font-family: 'Cairo', sans-serif;
  background-color: #fefefe;
  color: #333333;
  direction: rtl;
}

/* تخصيص scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f0f9;
}

::-webkit-scrollbar-thumb {
  background: #9c8ec9;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #8b7d9a;
}

/* تأثيرات انتقالية */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>