<template>
  <div>
    <nav>
      <ul>
        <!-- versione senza il data -->
        <!-- <router-link :to="{ name: 'home' }">Home</router-link> -->
        <li v-for="(menuItem, index) in menu" :key="index">
          <router-link :to="{ name: menuItem.linkName }">{{
            menuItem.label
          }}</router-link>
        </li>
        <!-- versione senza il data
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
            <router-link :to="{ name: 'blog' }">My Posts</router-link>
            </li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menu: [
        { linkName: "home", label: "Home" },
        { linkName: "blog", label: "My Posts" },
      ],
    };
  },
};
</script>

<style>
</style>
