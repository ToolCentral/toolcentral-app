<template>
  <div id="app" class="wrapper">
    <b-navbar class="main-header navbar navbar-expand" variant="success" type="dark">
      <b-navbar-nav>
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><font-awesome-icon icon="bars" /></a>
        </li>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item-dropdown text="Converters" right>
          <b-nav-item-dropdown
            id="converters-data-menu"
            :toggle-class="{ 'py-1 px-4 text-dark': true, 'nav-link': false, 'dropdown-item': true }"
            text="Data"
            right
          >
            <b-dropdown-item href="#">Data</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            id="converters-data-menu"
            :toggle-class="{ 'py-1 px-4 text-dark': true, 'nav-link': false, 'dropdown-item': true }"
            text="Strings"
            right
          >
            <b-dropdown-item href="#">Strings</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            id="converters-data-menu"
            :toggle-class="{ 'py-1 px-4 text-dark': true, 'nav-link': false, 'dropdown-item': true }"
            text="Numbers"
            right
          >
            <b-dropdown-item href="#">Numbers</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <font-awesome-icon icon="expand-arrows-alt" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <font-awesome-icon icon="th-large" />
          </a>
        </li>
      </b-navbar-nav>
    </b-navbar>

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img
          src="./assets/logo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <div class="d-none">
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
            </div>
            <div class="info">
              <a href="#" class="d-block">Alexander Pierce</a>
            </div>
          </div>

          <!-- SidebarSearch Form -->
          <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
              <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div class="input-group-append">
                <button class="btn btn-sidebar">
                  <font-awesome-icon icon="search" class="fa-fw" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <b-nav-item to="/">
              <font-awesome-icon :icon="['far', 'circle']" class="nav-icon text-success" />
              <p>Home</p>
            </b-nav-item>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <font-awesome-icon :icon="['far', 'circle']" class="nav-icon text-info" />
                <p>Informational</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <breadcrumbs></breadcrumbs>
      <!-- Content Header (Page header) -->
      <div class="content-header d-none">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Dashboard</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <router-view />
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <strong>Copyright &copy; 2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block"><b>Version</b> 0.0.1</div>
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "Dev Tools",
      // all titles will be injected into this template
      titleTemplate: "%s | ToolCentral App",
      bodyAttrs: {
        class: ["hold-transition sidebar-mini layout-fixed"]
      }
    },
    mounted() {
      this.$root.$on("bv::dropdown::show", bvEvent => {
        if (bvEvent.componentId === "converters-data-menu") {
          this.isDropdown2Visible = true;
        }
      });
      this.$root.$on("bv::dropdown::hide", bvEvent => {
        if (bvEvent.componentId === "converters-data-menu") {
          this.isDropdown2Visible = false;
        }
        if (this.isDropdown2Visible) {
          bvEvent.preventDefault();
        }
      });
    }
  };
</script>

<style></style>
