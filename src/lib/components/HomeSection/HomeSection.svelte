<script>
    export let id;
    export let bgImage;
    export let contentClass;

</script>
<style lang='postcss'>
    .section {
        width: 100%;
        z-index: 0;
        @apply relative;
    }

    .content {
        z-index: 0 !important;
        @apply min-h-[100vh] lg:min-h-[100vh] mx-0 lg:mx-auto flex flex-col relative;
    }

</style>
<div class={`section ${$$props.class}`} id={id}>
    {#if (bgImage)}
        <img  class="absolute left-0 right-0 bottom-0 top-0 object-cover w-full h-full" src={bgImage}
             alt="background"/>
        {/if}
    <div class={`content ${contentClass||''}`}>
        <slot/>
    </div>
</div>