<template>
  <div>
    <div class="card card-flush">
      <button @click="toggleModal">Toogle modal</button>
      <!--begin::Card header-->
      <div class="card-header pt-8">
        <div class="card-title">
          <!--begin::Search-->
          <div class="d-flex align-items-center position-relative my-1">
            <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
            <span class="svg-icon svg-icon-1 position-absolute ms-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="17.0365"
                  y="15.1223"
                  width="8.15546"
                  height="2"
                  rx="1"
                  transform="rotate(45 17.0365 15.1223)"
                  fill="currentColor"
                ></rect>
                <path
                  d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <!--end::Svg Icon-->
            <input
              type="text"
              data-kt-filemanager-table-filter="search"
              class="form-control form-control-solid w-250px ps-15"
              placeholder="Search Files &amp; Folders"
            />
          </div>
          <!--end::Search-->
        </div>
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <!--begin::Toolbar-->
          <div
            class="d-flex justify-content-end"
            data-kt-filemanager-table-toolbar="base"
          >
            <!--begin::Add customer-->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#new_files_upload_modal"
            >
              <!--begin::Svg Icon | path: icons/duotune/files/fil018.svg-->
              <span class="svg-icon svg-icon-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10.4 3.60001L12 6H21C21.6 6 22 6.4 22 7V19C22 19.6 21.6 20 21 20H3C2.4 20 2 19.6 2 19V4C2 3.4 2.4 3 3 3H9.20001C9.70001 3 10.2 3.20001 10.4 3.60001ZM16 11.6L12.7 8.29999C12.3 7.89999 11.7 7.89999 11.3 8.29999L8 11.6H11V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V11.6H16Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.3"
                    d="M11 11.6V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V11.6H11Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <!--end::Svg Icon-->
              Upload Files
            </button>
            <!--end::Add customer-->
          </div>
          <!--end::Toolbar-->
          <!--begin::Group actions-->
          <div
            class="d-flex justify-content-end align-items-center d-none"
            data-kt-filemanager-table-toolbar="selected"
          >
            <div class="fw-bold me-5">
              <span
                class="me-2"
                data-kt-filemanager-table-select="selected_count"
              ></span>
              Selected
            </div>
            <button
              type="button"
              class="btn btn-danger"
              data-kt-filemanager-table-select="delete_selected"
            >
              Delete Selected
            </button>
          </div>
          <!--end::Group actions-->
        </div>
        <!--end::Card toolbar-->
      </div>
      <!--end::Card header-->
      <!--begin::Card body-->
      <div class="card-body">
        <!--begin::Table header-->
        <div class="d-flex flex-stack">
          <!--begin::Folder path-->
          <div class="badge badge-lg badge-light-primary">
            <div class="d-flex align-items-center flex-wrap">
              <!--begin::Svg Icon | path: icons/duotune/abstract/abs039.svg-->
              <span class="svg-icon svg-icon-2x svg-icon-primary me-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
              <a href="#">Uploads</a>
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
              <span class="svg-icon svg-icon-2x svg-icon-primary mx-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <!--end::Svg Icon-->
            </div>
          </div>
          <!--end::Folder path-->
          <!--begin::Folder Stats-->
          <div class="badge badge-lg badge-primary">
            <span id="kt_file_manager_items_counter"
              >{{ totalItems }} items</span
            >
          </div>
          <!--end::Folder Stats-->
        </div>
        <!--end::Table header-->
        <!--begin::Table-->
        <div
          id="kt_file_manager_list_wrapper"
          class="dataTables_wrapper dt-bootstrap4 no-footer"
        >
          <div class="table-responsive">
            <table
              id="kt_file_manager_list"
              data-kt-filemanager-table="files"
              class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
            >
              <!--begin::Table head-->
              <thead>
                <!--begin::Table row-->
                <tr
                  class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0"
                >
                  <th
                    class="w-10px pe-2 sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    style="width: 29.8906px"
                  >
                    <div
                      class="form-check form-check-sm form-check-custom form-check-solid me-3"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        data-kt-check="true"
                        data-kt-check-target="#kt_file_manager_list .form-check-input"
                        value="1"
                      />
                    </div>
                  </th>
                  <th
                    class="min-w-250px sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    style="width: 520px"
                  >
                    Name
                  </th>
                  <th
                    class="min-w-10px sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    style="width: 117.562px"
                  >
                    Size
                  </th>
                  <th
                    class="min-w-125px sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    style="width: 334.297px"
                  >
                    Last Modified
                  </th>
                  <th
                    class="w-125px sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    style="width: 125px"
                  ></th>
                </tr>
                <!--end::Table row-->
              </thead>
              <!--end::Table head-->
              <!--begin::Table body-->
              <tbody class="fw-semibold text-gray-600">
                <tr class="odd" v-for="(file, key) in files" :key="key">
                  <!--begin::Checkbox-->
                  <td>
                    <div
                      class="form-check form-check-sm form-check-custom form-check-solid"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                      />
                    </div>
                  </td>
                  <!--end::Checkbox-->
                  <!--begin::Name--->
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="symbol symbol-50px"
                        data-bs-toggle="modal"
                        data-bs-target="#update_file"
                        @click.prevent="selectFile(file)"
                      >
                        <span
                          class="symbol-label"
                          :style="{
                            backgroundImage:
                              'url(https://127.0.0.1:8002/media/cache/resolve/50x50/' +
                              file.path +
                              ')',
                          }"
                        ></span>
                      </a>
                      <a
                        href="#"
                        class="ms-5 text-gray-800 text-hover-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#update_file"
                        @click.prevent="selectFile(file)"
                        >{{ file.fileName }}</a
                      >
                    </div>
                  </td>
                  <!--end::Name--->
                  <!--begin::Size-->
                  <td>{{ formatBytes(file.size) }}</td>
                  <!--end::Size-->
                  <!--begin::Last modified-->
                  <td :data-order="file.updatedAt">
                    {{ $filters.formatDateTime(file.updatedAt) }}
                  </td>
                  <!--end::Last modified-->
                  <!--begin::Actions-->
                  <td
                    class="text-end"
                    data-kt-filemanager-table="action_dropdown"
                  >
                    <div class="d-flex justify-content-end">
                      <!--begin::Share link-->
                      <div class="ms-2" data-kt-filemanger-table="copy_link">
                        <button
                          type="button"
                          class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          <!--begin::Svg Icon | path: icons/duotune/coding/cod007.svg-->
                          <span class="svg-icon svg-icon-5 m-0">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
                                fill="currentColor"
                              />
                              <path
                                d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <!--end::Svg Icon-->
                        </button>
                        <!--begin::Menu-->
                        <div
                          class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                          data-kt-menu="true"
                        >
                          <!--begin::Card-->
                          <div class="card card-flush">
                            <div class="card-body p-5">
                              <!--begin::Loader-->
                              <div
                                class="d-flex"
                                data-kt-filemanger-table="copy_link_generator"
                              >
                                <!--begin::Spinner-->
                                <div class="me-5" data-kt-indicator="on">
                                  <span class="indicator-progress">
                                    <span
                                      class="spinner-border spinner-border-sm align-middle ms-2"
                                    ></span>
                                  </span>
                                </div>
                                <!--end::Spinner-->
                                <!--begin::Label-->
                                <div class="fs-6 text-dark">
                                  Generating Share Link...
                                </div>
                                <!--end::Label-->
                              </div>
                              <!--end::Loader-->
                              <!--begin::Link-->
                              <div
                                class="d-flex flex-column text-start d-none"
                                data-kt-filemanger-table="copy_link_result"
                              >
                                <div class="d-flex mb-3">
                                  <!--begin::Svg Icon | path: icons/duotune/arrows/arr085.svg-->
                                  <span
                                    class="svg-icon svg-icon-2 svg-icon-success me-3"
                                  >
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  <!--end::Svg Icon-->
                                  <div class="fs-6 text-dark">
                                    Share Link Generated
                                  </div>
                                </div>
                                <input
                                  type="text"
                                  class="form-control form-control-sm"
                                  value="https://path/to/file/or/folder/"
                                />
                                <div
                                  class="text-muted fw-normal mt-2 fs-8 px-3"
                                >
                                  Read only.
                                  <a
                                    href="../../demo1/dist/apps/file-manager/settings/.html"
                                    class="ms-2"
                                    >Change permissions</a
                                  >
                                </div>
                              </div>
                              <!--end::Link-->
                            </div>
                          </div>
                          <!--end::Card-->
                        </div>
                        <!--end::Menu-->
                      </div>
                      <!--end::Share link-->
                      <!--begin::More-->
                      <div class="ms-2">
                        <MenuComponent :menu-selector="'#kt-search-menu' + key">
                          <template v-slot:toggle>
                            <button
                              type="button"
                              :id="'kt_header_search' + key"
                              class="btn btn-sm btn-icon btn-light btn-active-light-primary"
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-end"
                              :data-kt-menu-target="'#kt-search-menu' + key"
                              data-kt-menu-attach="parent"
                            >
                              <!--begin::Svg Icon | path: icons/duotune/general/gen052.svg-->
                              <span class="svg-icon svg-icon-5 m-0"
                                ><svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="10"
                                    y="10"
                                    width="4"
                                    height="4"
                                    rx="2"
                                    fill="currentColor"
                                  ></rect>
                                  <rect
                                    x="17"
                                    y="10"
                                    width="4"
                                    height="4"
                                    rx="2"
                                    fill="currentColor"
                                  ></rect>
                                  <rect
                                    x="3"
                                    y="10"
                                    width="4"
                                    height="4"
                                    rx="2"
                                    fill="currentColor"
                                  ></rect>
                                </svg>
                              </span>
                              <!--end::Svg Icon-->
                            </button>
                          </template>
                          <template v-slot:content>
                            <div
                              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                              data-kt-menu="true"
                              :id="'kt-search-menu' + key"
                            >
                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <a
                                  href="#"
                                  class="menu-link px-3"
                                  @click.prevent="downloadFile(file.path)"
                                >
                                  Download File
                                </a>
                              </div>
                              <!--end::Menu item-->

                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <a
                                  href="#"
                                  @click.prevent="deleteFile(file.id)"
                                  class="menu-link text-danger px-3"
                                  data-kt-filemanager-table-filter="delete_row"
                                >
                                  Delete
                                </a>
                              </div>
                              <!--end::Menu item-->
                            </div>
                          </template>
                        </MenuComponent>
                      </div>
                      <!--end::More-->
                    </div>
                  </td>
                  <!--end::Actions-->
                </tr>
              </tbody>
              <!--end::Table body-->
            </table>
          </div>
        </div>
        <!--end::Table-->
      </div>
      <!--end::Card body-->
    </div>

    <div class="modal fade" tabindex="-1" id="new_files_upload_modal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Upload files</h5>

            <!--begin::Close-->
            <div
              class="btn btn-icon btn-sm btn-active-light-primary ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span class="svg-icon svg-icon-1"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x="6"
                    y="17.3137"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(-45 6 17.3137)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="7.41422"
                    y="6"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    fill="currentColor"
                  ></rect>
                </svg>
              </span>
            </div>
            <!--end::Close-->
          </div>

          <div class="modal-body">
            <!--begin::Form-->
            <form class="form" action="#" method="post">
              <!--begin::Input group-->
              <div class="fv-row">
                <!--begin::Dropzone-->
                <div class="dropzone" id="kt_dropzonejs_example_1">
                  <!--begin::Message-->
                  <div class="dz-message needsclick">
                    <!--begin::Icon-->
                    <i
                      class="bi bi-file-earmark-arrow-up text-primary fs-3x"
                    ></i>
                    <!--end::Icon-->

                    <!--begin::Info-->
                    <div class="ms-4">
                      <h3 class="fs-5 fw-bold text-gray-900 mb-1">
                        Drop files here or click to upload.
                      </h3>
                      <span class="fs-7 fw-semibold text-gray-400"
                        >Upload up to 10 files</span
                      >
                    </div>
                    <!--end::Info-->
                  </div>
                </div>
                <!--end::Dropzone-->
              </div>
              <!--end::Input group-->
            </form>
            <!--end::Form-->
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" tabindex="-1" id="update_file">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update file meta</h5>

            <!--begin::Close-->
            <div
              class="btn btn-icon btn-sm btn-active-light-primary ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span class="svg-icon svg-icon-1"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x="6"
                    y="17.3137"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(-45 6 17.3137)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="7.41422"
                    y="6"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    fill="currentColor"
                  ></rect>
                </svg>
              </span>
            </div>
            <!--end::Close-->
          </div>

          <div class="modal-body">
            <div class="mb-5">
              <label class="form-label">Alt text</label>
              <input
                type="text"
                class="form-control form-control-solid"
                placeholder="Enter alternative text"
                v-model="selectedFile.altText"
              />
            </div>

            <div class="mb-5">
              <label class="form-label">Caption</label>
              <input
                type="text"
                class="form-control form-control-solid"
                placeholder="Enter caption"
                v-model="selectedFile.caption"
              />
            </div>

            <div class="mb-5">
              <label class="form-label">Description</label>
              <textarea
                type="text"
                class="form-control form-control-solid"
                placeholder="Enter description"
                v-model="selectedFile.description"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button
              @click="updateFile(this.selectedFile)"
              class="btn fw-bold btn-primary w-100"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApiService from "@/core/services/ApiService";
import Dropzone from "dropzone";
import MenuComponent from "@/components/menu/MenuComponent.vue";

export default defineComponent({
  name: "media-manager-list",
  components: {
    MenuComponent,
  },
  data() {
    return {
      files: [],
      isFilesLoaded: false,
      totalItems: null,
      selectedFile: {
        id: null,
        altText: null,
        caption: null,
        description: null,
      },
      showDropDown: false,
      dropDownCss: "display: block; position: absolute; right: 0px;",
    };
  },
  mounted() {
    ApiService.get("/media", "?order[updatedAt]=ASC").then(({ data }) => {
      this.totalItems = data["hydra:totalItems"];
      this.files = data["hydra:member"];
      this.isFilesLoaded = true;
    });

    new Dropzone("#kt_dropzonejs_example_1", {
      url: import.meta.env.VITE_APP_API_URL + "/upload",
      paramName: "file",
      maxFiles: 10,
      maxFilesize: 10,
      uploadMultiple: false,
      addRemoveLinks: true,
      headers: {
        Authorization: null,
        "Cache-Control": null,
        "X-Requested-With": null,
      },
      accept: function (file, done) {
        done();
        console.log("accept");
      },
    });

    this.toggleModal();
  },
  methods: {
    toggleModal() {
      // new_files_upload_modal
      const newFilesUploadModal = document.getElementById(
        "new_files_upload_modal"
      );
      newFilesUploadModal.addEventListener("hide.bs.modal", () => {
        console.log("newFilesUploadModal close");

        this.$notify({
          type: "success",
          title: "File successfully uploaded",
        });

        this.isFilesLoaded = false;
        ApiService.get("/media", "?order[updatedAt]=ASC").then(({ data }) => {
          this.totalItems = data["hydra:totalItems"];
          this.files = data["hydra:member"];
          this.isFilesLoaded = true;
        });
      });
    },
    downloadFile(filePath) {
      window.open(
        import.meta.env.VITE_APP_LOCATION_ORIGIN + filePath,
        "_blank"
      );
    },
    deleteFile(fileId) {
      ApiService.delete(`/media/${fileId}`).then((response) => {
        console.log(response);
      });
    },
    formatBytes(bytes, decimals = 2) {
      if (!+bytes) return "0 Bytes";

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    },
    selectFile(payload) {
      this.selectedFile.id = payload.id;
      this.selectedFile.altText = payload.altText;
      this.selectedFile.caption = payload.caption;
      this.selectedFile.description = payload.description;
    },
    updateFile(payload) {
      ApiService.update("/media", payload.id, {
        altText: payload.altText,
        caption: payload.caption,
        description: payload.description,
      });
    },
    toggleFileDropdown(payload) {
      this.showDropDown = true;
    },
  },
});
</script>
