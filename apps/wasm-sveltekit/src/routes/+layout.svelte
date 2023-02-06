<script>
	import '../app.css';
</script>

<nav>
	<a href="/">Window scope</a>
	<a href="/worker">Worker scope</a>
	<a href="/worklet">Worklet scope</a>
</nav>
<slot />

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		display: inline-block;
		margin: 2rem;
		font-size: 1.25rem;
	}
</style>
