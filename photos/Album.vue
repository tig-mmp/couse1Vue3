<template>
  <router-link :to="albumLink">
    {{ album.title }}
  </router-link>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: {
    album: {
      type: Object,
    },
  },

  setup(props) {
    const store = useStore();
    const albumLink = `/albums/${props.album.id}`;

    const click = () => {};

    return {
      click,
      albumLink,
    };
  },
};
</script>

<style scoped>
a {
  background: darkcyan;
  color: white;
  border: none;
  margin: 5px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.1s;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Arial;
}

a:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: 0.1s;
}

a.router-link-active {
  filter: brightness(80%);
}
</style>
