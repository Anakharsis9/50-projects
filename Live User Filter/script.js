Vue.component("user", {
  template: `
  <div class="user">
    <div class="img-wrapper">
      <img :src="user.picture.large" :alt="user.name.first">
    </div>
    <div class="user-info">
      <h5 class="user-name">{{user.name.first+" "+ user.name.last}}</h5>
      <span class="user-location">{{user.location.city + ", " + user.location.country}}</span>
    </div>
  </div>
  `,
  props: {
    user: Object,
  },
});

var app = new Vue({
  el: "#app",
  data: {
    searchValue: "",
    users: [],
  },
  computed: {
    getFilteredUsers() {
      return this.users.filter((user) => {
        let fullName = user.name.first + " " + user.name.last;
        let location = user.location.city + ", " + user.location.country;
        let info = fullName + " " + location;

        if (
          !info
            .toLocaleLowerCase()
            .includes(this.searchValue.toLocaleLowerCase())
        )
          return false;
        return true;
      });
    },
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const API_URL = "https://randomuser.me/api?results=50";

      const response = await fetch(API_URL);
      this.users = (await response.json()).results;
    },
  },
});
