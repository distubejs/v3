import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/pages/Home.vue";
import DocumentationPage from "../components/pages/Documentation.vue";
import UnknownRoutePage from "../components/pages/UnknownRoute.vue";
import DocsLoader from "../components/docs/Loader.vue";
import DocsViewer from "../components/docs/Viewer.vue";
import FileViewer from "../components/docs/FileViewer.vue";
import ClassViewer from "../components/docs/class-viewer/ClassViewer.vue";
import TypedefViewer from "../components/docs/TypedefViewer.vue";
import DocsSearch from "../components/docs/Search.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage, props: true },
    {
      path: "/docs",
      name: "docs",
      component: DocumentationPage,
      children: [
        {
          path: ":source",
          name: "docs-source",
          component: DocsLoader,
          props: true,
          children: [
            {
              path: ":tag",
              name: "docs-tag",
              component: DocsViewer,
              props: true,
              children: [
                { path: "search", name: "docs-search", props: true, component: DocsSearch },
                { path: "class/:class", name: "docs-class", props: true, component: ClassViewer },
                { path: "typedef/:typedef", name: "docs-typedef", props: true, component: TypedefViewer },
                { path: ":category/:file", name: "docs-file", props: true, component: FileViewer },
              ],
            },
          ],
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: UnknownRoutePage },
    { path: "/:pathMatch(.*)", name: "bad-not-found", component: UnknownRoutePage },
  ],
});
export default router;
