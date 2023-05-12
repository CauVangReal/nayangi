<template>
  <div class="vertical-page">
    <transition name="zoom-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>