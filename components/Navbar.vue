<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Nuxt-Link to="/" class="navbar-item">
          <p class="title is-3">LOGO</p>
        </Nuxt-Link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Nuxt-Link to="/" class="navbar-item" exact=""> Home </Nuxt-Link>

          <Nuxt-Link to="/posts" class="navbar-item"> Posts </Nuxt-Link>

          <Nuxt-Link to="/admin" class="navbar-item"> Admin </Nuxt-Link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Nuxt-Link to="/admin/auth/" class="button is-light">
                Log in
              </Nuxt-Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
p{
    color:white;
}
.navbar {
  background: linear-gradient(90deg, #25a06f, #4dba64);
}
.navbar-item {
  color: white;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #1c5f493b;
  color: #fafafa;
}
.buttons > a{
    background: none;
    border: 1px solid #fff;
    color: #fff;
}
</style>
