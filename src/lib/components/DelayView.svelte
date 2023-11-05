<script>

    let isShowing = false;
    let containerRef;
    export let scrollTop;
    $:scrollTop && !isShowing && checkVisibleDelay();

    function checkVisibleDelay() {
        if(!isShowing){
            const rect = containerRef.getBoundingClientRect();
            isShowing = rect.top < 10;
            console.log("RECT ", rect.top)
        }
    }
</script>
<div bind:this={containerRef}>
    {#if (isShowing)}
        <slot {...$$props}></slot>
    {/if}
</div>