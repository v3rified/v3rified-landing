<script>
    export let showDarkHeaderBg;
</script>

<div class={`flex flex-row gap-2.5  ${$$props.class||''}`}>
    <a href="#" class={`border ${showDarkHeaderBg?'border-black':'border-white'}`}>DOCs</a>
    <a href="#" class={`border ${showDarkHeaderBg?'border-black':'border-white'}`}>RUNNER X</a>
</div>

<style>
    a {
        border-radius: 50px;
        @apply px-2 py-1;
    }
</style>