Vue.component("user-card", {
  template: `
  <div v-if="user" class="user-card">
  <h1 v-if="user.message" class="notFound-text">No profile with this username</h1>
  <div v-if="user.id" class="content">
    <div class="image-wrapper">
      <img :src="user.avatar_url" class="image" alt="avatar" />
    </div>
    <div class="text">
      <span class="name">{{user.name || "null"}}</span>
      <span class="bio">{{user.bio||"bio is empty"}}</span>
      <div class="info">
        <div class="info-box">
          <span class="digit">{{user.followers}}</span>
          <span class="info-text">Followers</span>
        </div>
        <div class="info-box">
          <span class="digit">{{user.following}}</span>
          <span class="info-text">Following</span>
        </div>
        <div class="info-box">
          <span class="digit">{{user.public_repos}}</span>
          <span class="info-text">Repos</span>
        </div>
      </div>
      <div class="tags">
        <a
          v-for="repo in repos"
          :key="repo.id"
          class="tag"
          :href="repo.html_url"
          target="_blank"
          >{{repo.name}}</a
        >
      </div>
    </div>
  </div>
</div>
  `,
  props: {
    username: {
      type: String,
    },
  },
  data: () => ({
    user: null,
    repos: [],
  }),
  methods: {
    async getUser() {
      const URL = "https://api.github.com/users/";

      if (!this.username) return;

      const userRes = await fetch(URL + this.username);
      this.user = await userRes.json();

      const Repos_URL = this.user.repos_url;

      const reposRes = await fetch(Repos_URL);
      this.repos = await reposRes.json();
      this.repos = this.repos.slice(0, 5);
    },
  },
  watch: {
    username: "getUser",
  },
});

var app = new Vue({
  el: "#app",
  data: {
    username: "",
  },
});
