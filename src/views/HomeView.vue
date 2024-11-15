<template>
  <section id="project" style="margin-top: 70px">
  <div class="container">
    <!-- Page Head -->
    <div class="row page-head gap-2">
      <h1 class="white-head fw-bold text-green-800">About</h1>
      <p>👋 Hello! Assalamualikum, I'm Leo X, a web developer and UX designer.</p>
    </div>
    <img src="../assets/img/home/about-shape-3.svg" loading="lazy" alt="" class="shape shape-3">

    <h3 class="titlebar white-head text-decoration-none theme-color">WHO AM I</h3>

    <div class="container">
      <div class="row">
        <!-- Image Column -->
        <div class="col-md-4 d-flex justify-content-center align-items-center order-1 order-md-2">
          <img src="../assets/img/me/home-image.jpg" loading="lazy" alt="Leo X" class="img-fluid shadow-sm">
        </div>

        <!-- Text Column -->
        <div class="col-md-8 order-2 order-md-1">
          <div class="w-100">
            <p class="text-gray-400">With over 5 years of experience in web development, I'm passionate about creating intuitive and efficient digital experiences. My expertise includes <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">JavaScript</a>, <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React</a>, <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">Node.js</a>, and modern web technologies.</p>
            <p class="text-gray-400">My journey into development began with a love for problem-solving and a desire to build elegant, user-friendly web applications. Over the years, I've had the privilege of working on a variety of projects that have shaped my skills and deepened my understanding of the tech landscape.</p>
          </div>

          <h5 class="titlebar white-head text-decoration-none">What I'm Working On</h5>
          <ul>
            <li class="text-gray-400">Currently building a responsive web application for task management using <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React</a> and <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">Node.js</a>.</li>
            <li class="text-gray-400">Developing an e-commerce platform optimized for performance and SEO with <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">Next.js</a> and <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://stripe.com/">Stripe</a>.</li>
            <li class="text-gray-400">Working on a real-time chat application featuring end-to-end encryption powered by <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://websockets.org/">WebSocket</a> technology.</li>
          </ul>
        </div>
      </div>
    </div>

    <h4 class="titlebar white-head text-decoration-none">Social links</h4>
    <ul>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://github.com/isherezahin">GitHub</a></li>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/isherejahin/">Facebook</a></li>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://instagram.com/isherezahin">Instagram</a></li>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://x.com/isherezahin">X</a></li>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://youtube.com/@isherezahin">YouTube</a></li>
    </ul>
    
    <h4 class="titlebar white-head text-decoration-none">Tech Stack</h4>
    <div class="tech-stack">
      <div class="tech">
          <img src="https://skillicons.dev/icons?i=vscode" alt="Visual Studio Code"/>
          <div class="tooltip"><span class="tech-name">Visual Studio Code:</span> A source-code editor developed by Microsoft.</div>
      </div>
      <div class="tech">
          <img src="https://skillicons.dev/icons?i=git" alt="Git"/>
          <div class="tooltip"><span class="tech-name">Git:</span> A distributed version control system for tracking changes in source code.</div>
      </div>
      <div class="tech">
          <img src="https://skillicons.dev/icons?i=react" alt="React"/>
          <div class="tooltip"><span class="tech-name">React:</span> A JavaScript library for building user interfaces, developed by Facebook.</div>
      </div>
      <div class="tech">
          <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js"/>
          <div class="tooltip"><span class="tech-name">Node.js:</span> A JavaScript runtime built on Chrome's V8 JavaScript engine, designed for scalable network applications.</div>
      </div>
      <div class="tech">
          <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js"/>
          <div class="tooltip"><span class="tech-name">Next.js:</span> A React framework for production with server-side rendering and static site generation.</div>
      </div>
      <div class="tech">
          <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript"/>
          <div class="tooltip"><span class="tech-name">TypeScript:</span> A superset of JavaScript that adds static types and other features to the language.</div>
      </div>
      <div class="tech">
          <img src="https://skillicons.dev/icons?i=webpack" alt="Webpack"/>
          <div class="tooltip"><span class="tech-name">Webpack:</span> A module bundler for JavaScript applications, enabling code splitting, lazy loading, and optimization.</div>
      </div>
    </div>
    <h4 class="titlebar white-head text-decoration-none" style="margin-bottom: 4px;">Get in Touch</h4>
    <p  class="text-gray-400">Interested in working together? Feel free to reach out!</p>
  </div>
  </section>
</template>

<script>
export default {
name: 'AboutComponent',
// Add any necessary data, methods, or computed properties here
}
</script>

<style scoped>
.titlebar {
margin-top: 2rem;
margin-bottom: 2rem;
font-weight: 600;
}

.title {
color: var(--text);
}

.transition {
transition: opacity 0.2s ease-in-out;
}
.rounded {
border-radius: 0.5rem;
}

.text-gray-400 {
color: var(--text);
}

a, h4 {
  font-weight: 600;
}

.img-fluid {
max-width: 80%;
height: auto;
object-fit: cover;
transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
cursor: pointer;
box-shadow: 0 4px 8px var(--theme);
border-radius: 0.3rem;
margin-bottom: 2rem;
}

.img-fluid:hover {
transform: scale(1.05);
box-shadow: 0 8px 16px var(--theme);
}

@media (max-width: 768px) {
.img-fluid {
  max-width: 70%;
}
}

@media (max-width: 576px) {
.img-fluid {
  max-width: 70%;
  border-radius: 0.2rem;
}
}
.tech-stack{
justify-content: left;
}
</style>
