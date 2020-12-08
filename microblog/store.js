import { reactive, computed } from "vue";
import { testPosts } from "./testPosts.js";

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentHashtag: null,
    });
  }

  get filteredPosts() {
    return computed(() => {
      if (!this.state.currentHashtag) {
        return this.state.posts;
      }

      return this.state.posts.filter((post) =>
        post.hashtags.some((hashtag) =>
          hashtag.startsWith(this.state.currentHashtag)
        )
      );
    });
  }

  setHashtag(tag) {
    this.state.currentHashtag = tag;
  }

  incrementLike(id) {
    const thePost = this.state.posts.find((x) => x.id === id);
    if (!thePost) {
      return;
    }
    thePost.likes += 1;
  }
}

export const store = new Store();
