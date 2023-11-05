<script>
	import { _ } from 'svelte-i18n';

	export let menus;
	let checkoutRef;

	function onMenuClick() {
		checkoutRef.click();
	}

</script>

<style lang='postcss'>
    .drawer {
        background: rgba(255, 255, 255, 0.01) !important;
        box-shadow: inset 0 4px 18px rgba(154, 146, 2, 0.3), inset 0 1px 0 rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(50px);
        width: 100vw;
        right: -100vw;
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
        @apply flex flex-col p-5 fixed top-0 bottom-0;
    }

    .mobile-menu-item {
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        border-image-slice: 1;
        @apply py-5 text-center;
    }

    a {
        @apply text-base;
    }

    #drawer-toggle:checked ~ .drawer {
        right: 0px;
    }

</style>

<nav class='large-hidden ml-auto'>
	<input type='checkbox' id='drawer-toggle' class='hidden' bind:this={checkoutRef} />
	<label for='drawer-toggle' class='mr-4'>
		<img alt='menu' src='/icons/menu.png' class='w-[46px]' />
	</label>
	<div class='drawer'>
		<label for='drawer-toggle' class='ml-auto'>
			<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'>
				<path fill='white'
							d='M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586L6.225 4.81Z' />
			</svg>

		</label>
		{#each menus as item}
			<a on:click={onMenuClick} href={`#${item}`} class={'mobile-menu-item'}>{$_(`header.menus.${item}`)}</a>
		{/each}
	</div>
</nav>