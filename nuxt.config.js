export default {
  mode: "universal",

  target: "static",

  hooks: {
    "vue-renderer:ssr:context"(context) {
      const fetchError = context.nuxt.fetch.find(data => data._error);
      if (fetchError) {
        context.nuxt.error = fetchError._error;
      }
    }
  },

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  components: true
};
