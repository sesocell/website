<script lang="ts">
    const { currentYear }: { currentYear: number } = $props();
</script>

<div class="container">
    <nav>
        <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <header>
        <h1>Semih</h1>
        <div class="role">Engineer</div>
        <div class="focus">
Passionate about programming.
        </div>
    </header>

    <main>
        <section id="about">
            <h2>About</h2>
            <p>
				 I focus on improving my skills by building projects, experimenting with new technologies, and learning how systems and applications work.
            </p>
        </section>

        <section id="projects">
            <h2>Projects</h2>

            <div class="project-item">
                <h3>
                    <a href="https://github.com/saveside/honeypot">honeypot</a>
                </h3>
                <span class="project-meta">Kubernetes, Opentofu, Helm</span>
                <p>
                    A honey soaked Kubernetes configuration which provides
                    simplicty and advanced usability with many services and
                    tools.
                </p>
            </div>
        </section>
        <section id="contributed-projects">
					<h2>Contributed Projects</h2>

					<div class="project-item">
						<h3><a href="https://github.com/LibreTurks/usmanagabot">usmanagabot</a></h3>
						<span class="project-meta">GitHub Actions</span>
						<p>
						    UsmanAga is a powerful and feature-rich Discord bot built with TypeScript and the Discord.js library. It's designed to be modular, extensible, and easy to maintain.
						</p>
					</div>
					<div class="project-item">
						<h3><a href="https://github.com/xeome/slimserve">slimserve</a></h3>
            <span class="project-meta">GitHub Actions, Kubernetes, Helm</span>
						<p>
						    SlimServe is a minimalistic and efficient file-serving application that provides seamless file sharing over HTTP with minimal dependencies, configuration, and resource usage. Built with a philosophy of being simple, fast, and easy to use.
						</p>
					</div>
				</section>

        <section id="contact">
            <h2>Contact</h2>
            <div class="contact-links">
                <a href="mailto:sesocell@proton.me">Email: sesocell@proton.me</a>
                <span>/</span>
                <a href="https://github.com/sesocell">GitHub: sesocell</a>
                <span>/</span>
                <a href="https://discord.com/users/1056200154157416469"
                    >Discord: sesocell</a
                >
            </div>
        </section>
    </main>

    <footer>
        &copy; {currentYear} sesocell.
    </footer>
</div>
