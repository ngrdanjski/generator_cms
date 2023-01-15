<template>
  <div>
    <div class="card">
      <!--begin::Header-->
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold fs-3 mb-1">All Posts</span>
        </h3>

        <div
          class="card-toolbar"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-trigger="hover"
          title="Click to add a user"
        >
          <router-link to="new" class="btn btn-sm btn-light-primary">
            <span class="svg-icon svg-icon-3">
              <inline-svg src="/media/icons/duotune/arrows/arr075.svg" />
            </span>
            New Post
          </router-link>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body py-3">
        <!--begin::Table container-->
        <div class="table-responsive">
          <!--begin::Table-->
          <table
            class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
          >
            <!--begin::Table head-->
            <thead>
              <tr class="fw-bold text-muted">
                <th class="w-25px">
                  <div
                    class="form-check form-check-sm form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      @change="
                        checkedRows.length === 6
                          ? (checkedRows.length = 0)
                          : (checkedRows = [0, 1, 2, 3, 4, 5])
                      "
                    />
                  </div>
                </th>
                <th class="min-w-150px">Title & Slug</th>
                <th class="min-w-140px">Is Publish</th>
                <th class="min-w-120px">Created At</th>
                <th class="min-w-100px text-end">Actions</th>
              </tr>
            </thead>
            <!--end::Table head-->

            <!--begin::Table body-->
            <tbody>
              <template v-for="(post, index) in posts" :key="index">
                <tr>
                  <td>
                    <div
                      class="form-check form-check-sm form-check-custom form-check-solid"
                    >
                      <input
                        class="form-check-input widget-9-check"
                        type="checkbox"
                        :value="index"
                        v-model="checkedRows"
                      />
                    </div>
                  </td>

                  <td>
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-45px me-5">
                        <img :src="post.image" alt="" />
                      </div>
                      <div class="d-flex justify-content-start flex-column">
                        <a
                          href="#"
                          class="text-dark fw-bold text-hover-primary fs-6"
                          >{{ post.title }}</a
                        >

                        <span
                          class="text-muted fw-semobold text-muted d-block fs-7"
                          >{{ post.slug }}</span
                        >
                      </div>
                    </div>
                  </td>

                  <td>
                    <a
                      href="#"
                      class="text-dark fw-bold text-hover-primary d-block fs-6"
                      >{{ post.isPublish }}</a
                    >
                  </td>

                  <td class="text-end">
                    <div class="d-flex flex-column w-100 me-2">
                      <div class="d-flex flex-stack mb-2">
                        <span class="text-muted me-2 fs-7 fw-semobold">
                          {{ post.createdAt }}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="/media/icons/duotune/general/gen019.svg"
                        />
                      </span>
                    </a>

                    <a
                      href="#"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg src="/media/icons/duotune/art/art005.svg" />
                      </span>
                    </a>

                    <a
                      href="#"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="/media/icons/duotune/general/gen027.svg"
                        />
                      </span>
                    </a>
                  </td>
                </tr>
              </template>
            </tbody>
            <!--end::Table body-->
          </table>
          <!--end::Table-->
        </div>
        <!--end::Table container-->
      </div>
      <!--begin::Body-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "posts-list",
  data() {
    return {
      posts: [],
      isPostsLoaded: false,
    };
  },
  setup() {
    const checkedRows = ref<Array<number>>([]);

    return {
      checkedRows,
    };
  },
  mounted() {
    ApiService.get("/posts").then(({ data }) => {
      this.posts = data["hydra:member"];
      this.isPostsLoaded = true;
    });
  },
});
</script>
