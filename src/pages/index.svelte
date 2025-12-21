<script lang="ts">
    const { currentYear }: { currentYear: number } = $props();
</script>

<div class="container">
    <nav>
        <ul>
            <li><a href="#projects">Projects</a></li>
            <li>
                <a href="https://notes.yagis.dev" target="_blank">Notes ↗</a>
            </li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <header>
        <h1>Yağız</h1>
        <div class="role">Linux Enthusiast | Trabzon/Türkiye</div>
        <div class="focus">
            Passionate about programming, GNU/Linux, and exploring computer
            science through hands-on projects and system-level learning.
        </div>
    </header>

    <main>
        <section id="about">
            <h2>About</h2>
            <p>
                I'm a high school student passionate about programming and
                GNU/Linux. I'm actively improving my computer science skills,
                exploring how operating systems and software work, and learning
                by building small projects and experimenting.
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
                <a href="mailto:yagiz@yagis.dev">Email: yagiz@yagis.dev</a>
                <span>/</span>
                <a href="https://github.com/saveside">GitHub: saveside</a>
                <span>/</span>
                <a href="https://discord.com/users/1290338311965249538"
                    >Discord: savew.sh</a
                >
            </div>
        </section>
    </main>

    <footer>
        &copy; {currentYear} Yağız. Built with Svelte.
    </footer>
</div>
