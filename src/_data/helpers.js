module.exports = {
  normalizeSlug: function (slug) {
    if (!slug.startsWith("/")) {
      slug = "/" + slug;
    }
    if (!slug.endsWith("/")) {
      slug = slug + "/";
    }
    return slug;
  },

  currentYear: function () {
    const today = new Date();
    return today.getFullYear();
  },

  buildTime: new Date().toLocaleDateString()
};
