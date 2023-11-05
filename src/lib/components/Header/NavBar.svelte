<script>
    import {browser} from "$app/env";
    import {page} from "$app/stores";
    import LanguageToggle from "$components/LanguageToggle.svelte";
    import MobileDocsLink from "$components/MobileDocsLink.svelte";
    import IconExit from "$icons/IconExit.svelte";
    import IconMenu from "$icons/IconMenu.svelte";

    let toggleInputRef;
    export let fullLinks = []
    export let showDarkHeaderBg;
    $:$page.url && close()

    function close() {
        if(browser && toggleInputRef){
            toggleInputRef.checked = false
        }
    }
</script>

<nav class={`flex md:hidden ${$$props.class||''} z-[1000]`}>
    <input type="checkbox" id="drawer-toggle" class={'toggle'} bind:this={toggleInputRef}/>
    <label for="drawer-toggle">
        <IconMenu fill={showDarkHeaderBg?'black':'white'}/>
    </label>
    <MobileDocsLink class="absolute right-5" showDarkHeaderBg={showDarkHeaderBg}/>
    <div class={'drawer'}>
        <button class="absolute z-[10] left-5 top-5" on:click={close}>
            <IconExit/>
        </button>

        <div class="nav-bar-content">
            <MobileDocsLink class={`absolute right-5 top-[-20px] ${showDarkHeaderBg?'!border-black':'!border-white'}`}/>
            <div class="flex flex-col gap-4 mt-10">
                {#each fullLinks as link}
                    <a class="text-2xl" href={link.link}>{link.name}</a>
                {/each}
                <LanguageToggle class="!text-2xl"/>
            </div>


            <div class="flex items-center mt-auto mx-auto gap-3">
                <a href="https://play.google.com/store/apps/details?id=io.drun.app&hl=en-KR" target="_blank">
                    <img src="/images/btn_apple.png" alt="apple" width="96px" height="32px"
                         class="object-fill h-[32px]"/>
                </a>
                <a href="https://apps.apple.com/kr/app/d-run-%EB%94%94%EB%9F%B0/id1660721425" target="_blank">
                    <img src="/images/btn_google.png" alt="google" width="96px" height="32px"
                         class="object-fill h-[32px]"/>
                </a>

            </div>
        </div>
    </div>
</nav>
<style lang="postcss">
    .nav-bar-content {
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        @apply p-5 mt-10 flex flex-col;
    }

    .drawer {
        width: 100vw;
        left: -100vw;
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
        z-index: 10000 !important;
        background: url("/images/bg.png");
        background-size: cover;
        @apply flex flex-col fixed top-0 bottom-0;
    }

    .toggle {
        @apply hidden;
    }

    .toggle:checked ~ .drawer {
        left: 0;
    }

    .draw-btn {
        width: 36px;
        height: 36px;
        @apply rounded-full;
    }
</style>