<script>
    import Logo from "$icons/Logo.svelte";

    const sns = [
        {
            icon: 'sns_1.svg',
            link: 'https://x.com/v3rified_io'
        }, {
            icon: 'sns_2.svg',
            link: 'https://www.linkedin.com/company/v3rified'
        }, {
            icon: 'sns_3.svg',
            link: 'https://github.com/v3rified'
        }, {
            icon: 'sns_4.png',
            link: 'https://instagram.com/v3rified_io'
        }, {
            icon: 'sns_5.svg',
            link: 'https://docs.v3rified.io/'
        }, {
            icon: 'sns_6.png',
            link: 'https://beta.v3rified.io'
        }
    ]

</script>
<style lang='postcss'>
    .footer {
        background: linear-gradient(97deg, #159A27 -4.08%, #022407 105.58%);
        box-shadow: 0px -11px 15px 0px rgba(0, 0, 0, 0.40);
        @apply h-[unset] py-5 lg:py-[unset] lg:h-[262px] px-5 lg:px-[96px] flex flex-col lg:flex-row justify-between lg:items-center rounded-2xl lg:rounded-[40px] whitespace-pre-wrap;

    }
</style>
<div class="footer">
    <div class="flex flex-col">
        <Logo height="32" width="80"/>
        <span class="font-bold mt-5 lg:mt-[30px] text-light lg:max-w-[645px] text-base">For the fan, by the fan experiences powered  by Smart Ticketing and<br/>Community Action </span>
    </div>
    <div class="flex flex-col h-full items-end lg:items-start lg:justify-between py-[36px]">
        <div class="flex flex-row gap-[18px]">
            {#each sns as item}
                <a href={item.link} target="_blank">
                    <img class="w-[20px] h-[20px] object-contain" src={`/images/${item.icon}`} width="20" height="20" alt={item.link}/>
                </a>
            {/each}
        </div>
        <div class="flex flex-row justify-between lg:justify-start gap-[30px] lg:gap-[53px]">
            <a class="text-light font-bold" href="/terms">Terms of use</a>
            <a class="text-light font-bold" href="/privacy-policy">Privacy Policy</a>
        </div>
    </div>
</div>