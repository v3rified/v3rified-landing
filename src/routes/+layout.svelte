<script>
	import '../app.css';
	import Header from "$components/Header/HeaderComponent.svelte";
	// import '../lib/i18n/i18n';

	export const prerender = true;



</script>

<link rel='preconnect' href='https://fonts.googleapis.com'>
<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
<link
	href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
	rel='stylesheet'>
<title>V3rified</title>
<style global lang='postcss'>
</style>

<body>
<slot />
<Header/>
</body>