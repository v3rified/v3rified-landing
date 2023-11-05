<script>
    export let showModal; // boolean

    let dialog; // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div>

    <dialog
            bind:this={dialog}
            on:close={() => (showModal = false)}
            on:click|self={() => dialog.close()}

    >
        <div class="absolute z-40 top-[-70px] right-[-1rem]">
            <button class="relative z-50" autofocus on:click={() => dialog.close()}>
                <div class="flex items-center gap-3">
                    <img width="18px" height="20px" src="/images/close.png" alt="close"/>
                    <span class="text-white text-xl">Close</span>
                </div>
            </button>
        </div>
        <div on:click|stopPropagation>
            <slot />
        </div>

    </dialog>
</div>

<style>
    dialog {
        border: none;
        padding: 0;
        border-radius: 20px;
        @apply relative overflow-visible;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    button {
        display: block;
    }
</style>
