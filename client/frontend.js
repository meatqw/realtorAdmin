import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.0/dist/vue.esm.browser.js";

Vue.component("loader", {
  template: `<div style="display: flex; justify-content:center;align-itmes: center"><div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div></div>`,
});

new Vue({
  el: "#app",
  data() {
    return {
      loading: false,
      form: {
        title: "",
        description: "",
        img: "",
        date: ""
      },
      news: [],
    };
  },
  computed: {
    canCreate() {
      return this.form.title.trim() && this.form.description.trim() && this.form.img.trim()&& this.form.date.trim(); // trim - space in text
    },
  },
  methods: {
    async createNews() {
      const { ...news_item } = this.form;
      news_item.id = Date.now();
      const newNews = await request("/api/news", "POST", news_item);

      this.news.push(newNews);

      this.form.title = this.form.description = this.form.img = this.form.date = "";
    },
    // async markContact(id) {
    //   const contact = this.contacts.find(c => c.id === id);
    //   const updated = await request(`/api/user/${id}`, 'PUT', {...contact, marked:true})
    //   contact.marked = updated.marked;

    // }, не работает 
    async removeNews(id) {
      await request(`/api/news/${id}`, "DELETE");
      this.news = this.news.filter((c) => c.id !== id);
    },
  },
  async mounted() {
    this.loading = true;
    this.news = await request("/api/news");
    this.loading = false;
  },
});

async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    });
    return await response.json();
  } catch (e) {
    console.warn("Error", e.message);
  }
}
