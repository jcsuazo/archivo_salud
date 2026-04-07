<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		title: string;
		description: string;
		ogType?: string;
	}

	let { title, description, ogType = 'website' }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={$page.url.href} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:locale" content="es_DO" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
