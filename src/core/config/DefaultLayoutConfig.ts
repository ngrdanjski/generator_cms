import type LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  general: {
    mode: "light",
    primaryColor: "#50CD89",
    pageWidth: "default",
    layout: "dark-header",
  },
  header: {
    display: true,
    default: {
      container: "fixed",
      fixed: {
        desktop: false,
        mobile: false,
      },
      menu: {
        display: true,
        iconType: "svg",
      },
    },
  },
  sidebar: {
    display: false,
    default: {
      minimize: {
        desktop: {
          enabled: true,
          default: false,
          hoverable: true,
        },
      },
      menu: {
        iconType: "svg",
      },
    },
  },
  toolbar: {
    display: true,
    container: "fixed",
    fixed: {
      desktop: false,
      mobile: false,
    },
  },
  pageTitle: {
    display: true,
    breadcrumb: true,
    direction: "column",
  },
  content: {
    container: "fixed",
  },
  footer: {
    display: true,
    container: "fixed",
    fixed: {
      desktop: false,
      mobile: false,
    },
  },
  illustrations: {
    set: "sketchy-1",
  },
  scrolltop: {
    display: true,
  },
};

export default config;
