<template>
  <div class="empty-page">
    <transition name="zoom-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>