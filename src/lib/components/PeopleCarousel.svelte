<script>
    import IconArrow from "$icons/IconArrow.svelte";
    import IconCrypto from "$icons/IconCrypto.svelte";
    import {scale} from 'svelte/transition';

    let currentIndex = 0;
    // $:currentIndex && isRight()
    // $:currentIndex && isLeft()
    const list = [
        {
            name: "Peakboy",
            job: "Artist & Rapper",
            saying: "\"Utilizing new trends and technologies to help strengthen my relationship with global fans is something I’ve always wanted to do in my concerts. V3RIFIED will help me create a meaningful memory for both myself and my fans.”"
        },

        {
            name: "Patrick Yoon",
            isCrypto: true,
            saying: "\"V3RIFIED's vision to innovate the event experience for fans is a step in the right direction to bring fulfilling experiences for true fans. I'm thrilled to be a part of their journey.\""
        },
        {
            name: "Hyperound",
            saying: "“Making sure tickets are sold to genuine fans who want to come and enjoy the show has always been a problem plaguing the event industry. A Round is very excited to collaborate with V3RIFIED to provide fans with smart ticketing that creates memorable moments at all stages of the event experience.”"
        },
    ]

    $: isLeft = (index) => {
        if (currentIndex === 0) {
            return index === 2;
        } else {
            return index === currentIndex - 1;
        }
    }

    $: isRight = (index) => {
        if (currentIndex === 2) {
            return index === 0;
        } else {
            return index === currentIndex + 1;
        }
    }

    function onNext() {
        if (currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }

    function onPre() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = 2;
        }
    }
</script>

<div id="carousel" class="relative">

    <div id="spinner">
        {#each list as item, index }
            <div class={`item ${isLeft(index)?'item-left':isRight(index)?'item-right':''}`}>
                <img src={`/images/people_${index+1}.png`} width="374" height="374"
                     class="w-[180px] lg:w-[26vw] h-[180px] lg:h-[26vw]"/>
                {#if (currentIndex === index)}

                    <span transition:scale={{
                        duration: 500,
                        start: 0
                    }}
                          class="font-okana text-xl lg:text-[2rem] font-bold text-[#1DD836]">{item.name}</span>
                    {#if (item.job)}
                        <button transition:scale={{
                        duration: 500,
                        start: 0
                    }} class="button-job">{item.job}</button>
                    {/if}
                    {#if (item.isCrypto)}
                        <button transition:scale={{
                        duration: 500,
                        start: 0
                    }} class="button-job">
                            <IconCrypto></IconCrypto>
                        </button>
                    {/if}
                    <span transition:scale={{
                        duration: 500,
                        start: 0
                    }}
                          class="text-sm lg:text-xl !leading-[176%] font-bold text-center mt-[30px] max-w-[70vw] lg:max-w-[544px]">{item.saying}</span>
                {/if}
            </div>
        {/each}
    </div>
    <button class="absolute top-[45%] lg:top-[40%]" on:click={onPre}>
        <IconArrow/>
    </button>
    <button class="absolute top-[45%] lg:top-[40%] right-0" on:click={onNext}>
        <IconArrow class="rotate-180"/>
    </button>
</div>
<style lang="postcss">

    #carousel {
        overflow: hidden;
        @apply mt-5
    }

    #spinner {
        transform-style: preserve-3d;
        transform-origin: 50% 50% -500px;
        transition: 1s;
        @apply min-h-[60vh] lg:min-h-[100vh]
    }

    #spinner div {
        width: 100%;
        position: absolute;
    }

    .item-left {
        transform: scale(0.89) translateX(-40.5%) translateY(50px);
        opacity: 0.5;
        z-index: 0;
    }

    .item-right {
        transform: scale(0.89) translateX(40.5%) translateY(50px);
        opacity: 0.5;
        z-index: 1;
    }

    .item {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 1000ms;
        z-index: 10;
        @apply flex flex-col items-center;
    }

    .button-job {
        border-radius: 29px;
        border: 0.5px solid #1DD836;
        background: linear-gradient(99deg, #1DD83633 4.69%, #97979736 101.36%);
        backdrop-filter: blur(50px);
        @apply px-4 lg:px-[26px] py-1 lg:py-[11px] font-bold text-sm lg:text-xl mt-2 lg:mt-6;
    }
</style>