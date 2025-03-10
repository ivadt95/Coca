<template>
  <header class="header">
    <div
      class="container flex flex-row flex-justify-content-space-between flex-align-items-center"
      style="height: 52px"
    >
      <img src="~/assets/Logo.svg" class="logo" />
      <div class="flex flex-row flex-align-items-center">
        <nav class="nav flex flex-row flex-align-items-center mr-68">
          <a
            class="text-body-large text-medium cursor-pointer underline-animation nav_button__margin"
            >Home</a
          >
          <a
            class="text-body-large text-medium cursor-pointer underline-animation nav_button__margin"
            >About</a
          >
          <a
            class="text-body-large text-medium cursor-pointer underline-animation nav_button__margin"
            >Blog</a
          >
          <a
            class="text-body-large text-medium cursor-pointer underline-animation nav_button__margin"
            >Pricing</a
          >
        </nav>
        <div>
          <a
            class="contact-us text-body-large text-semibold underline-animation"
            >Contact Us -></a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style>
.header {
  /* background-color: lightblue; */
  width: 100%;
  height: 114px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
.nav_button__margin{
  margin-right: 32px;
}
.nav_button__margin:last-child{
  margin-right:68px;
}
</style>
