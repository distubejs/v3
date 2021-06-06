<template>
  <div id="docs">
    <docs-navbar :sources="sources" :source="source" />
    <router-view :source="source" :tag="tag" :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" @setRepository="setRepository" />
  </div>
</template>

<script>
import MainSource from "../../data/MainSource";
import DocsNavbar from "../docs/Navbar.vue";

export default {
  name: "documentation",
  props: ["darkMode"],
  components: {
    DocsNavbar,
  },

  data() {
    return {
      sources: {
        [MainSource.id]: MainSource,
      },
      source: MainSource,
      tag: MainSource.defaultTag,
    };
  },

  methods: {
    setSource(id) {
      this.source = this.sources[id];
    },

    setTag(tag) {
      this.tag = tag;
      this.source.recentTag = tag;
    },

    handleRoute(route) {
      let name = "docs-file";
      // Set the source, or redirect to a default route
      if (route.params.source && this.sources[route.params.source]) {
        this.setSource(route.params.source);
      } else {
        const params = {
          source: MainSource.id,
          tag: MainSource.defaultTag,
        };
        if (MainSource.defaultClass) {
          name = "docs-class";
          params.class = MainSource.defaultClass;
        } else {
          params.category = MainSource.defaultFile.category;
          params.file = MainSource.defaultFile.id;
        }
        this.$router.replace({ name, params });
        return;
      }

      // Set the tag, or redirect to a default route
      if (route.params.tag) {
        this.setTag(route.params.tag);
      } else {
        const params = {
          source: this.source.id,
          tag: this.source.recentTag || this.source.defaultTag,
        };
        if (this.source.defaultClass) {
          name = "docs-class";
          params.class = this.source.defaultClass;
        } else {
          params.category = this.source.defaultFile.category;
          params.file = this.source.defaultFile.id;
        }
        this.$router.replace({ name, params });
        return;
      }

      // Redirect to a default route
      if (!route.params.file && !route.params.class && !route.params.typedef && route.name !== "docs-search") {
        const params = {
          source: this.source.id,
          tag: this.tag,
        };
        if (this.source.defaultClass) {
          name = "docs-class";
          params.class = this.source.defaultClass;
        } else {
          params.category = this.source.defaultFile.category;
          params.file = this.source.defaultFile.id;
        }
        this.$router.replace({ name, params });
      }
    },

    toggleDarkMode() {
      this.$emit("toggleDarkMode");
    },

    setRepository(repo) {
      this.$emit("setRepository", repo);
    },
  },

  watch: {
    $route(to) {
      this.handleRoute(to);
    },
  },

  created() {
    this.handleRoute(this.$route);
  },
};
</script>
