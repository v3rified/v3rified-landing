<script>


import IconInstagram from "$icons/IconInstagram.svelte";
import IconTwitter from "$icons/IconTwitter.svelte";
import Logo from "$icons/Logo.svelte";
</script>
<style lang='postcss'>
    header {
        -webkit-transition: all ease-out .3s;
        -moz-transition: all ease-out .3s;
        -o-transition: all ease-out .3s;
        transition: all ease-out .3s;
        z-index: 1000 !important;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.80) 52.29%, rgba(0, 0, 0, 0.32) 100%);
        @apply fixed left-0 right-0 top-0 h-[60px] lg:h-[88px] flex items-center;
    }

    .header-content {
        @apply container mx-auto flex flex-row gap-3;
    }

</style>
<header class={`header`}>
    <div class='default-container flex !flex-row items-center gap-3'>
        <a href="/" class="flex mr-auto">
            <Logo class="w-[60px] lg:w-[82px]"/>
        </a>
        <a href="https://x.com/v3rified_io" target="_blank">
            <IconTwitter/>
        </a>
        <a href="https://instagram.com/v3rified_io" target="_blank" class="mr-3 lg:mr-[38px] ml-5">
            <IconInstagram/>
        </a>
        <a href="#" class="button-gradient">Join us</a>
    </div>

</header>
