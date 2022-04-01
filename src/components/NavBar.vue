<template>
    <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
            <router-link class="nav-link link-dark px-2 active" aria-current="page" to="/"> Accueil </router-link>    
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item">
            <router-link class="nav-link link-dark px-2" to="/login"> Login </router-link>    
        </li>
        <li class="nav-item">
            <router-link class="nav-link link-dark px-2" to="/register"> Inscription </router-link>    
        </li>
      </ul>
    </div>
  </nav>
  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">Double header</span>
      </a>
    </div>
  </header>
</template>


<script>
export default {
    
}
</script>