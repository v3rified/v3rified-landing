<script>
    import {browser} from "$app/env";
    import FooterComponent from "$components/Footer/FooterComponent.svelte";
    import HomeSection from '$components/HomeSection/HomeSection.svelte';
    import PeopleCarousel from "$components/PeopleCarousel.svelte";
    import Logo from "$icons/Logo.svelte";
    import Saos from "saos";
    import {onMount} from "svelte";
    import {fly, scale} from 'svelte/transition';

    export const prerender = false;
    let rootView;
    let scrollIntroRef;
    let currentIndex = 0;
    let isBetaSignup = false;
    let introTimer;
    let queueTimer;
    const intros = [
        {
            title: "NextGen Fan Experience Platform",
            desc: "<p>Empower fans with immersive co-created experiences through provision of real world utility.</p><p>V3RIFIED converges the offline and online experience of being a part of the fan community through our social platform and proprietary events.</p>",
        },
        {
            title: "Create social experiences at all stages",
            desc: "<p>V3RIFIED is an experience and social platform that provides fans with various perks at all stages of an event.</p><ul>" +
                "<li><b>Ticketing:</b> Manage event operations, sales & verification and distribution for offline & online events.</li>" +
                "<li><b>Watch Parties:</b> Share a virtual experience from fans anywhere in the world.</li>" +
                "<li><b>Live Engagements:</b> Which artist performed the best at the concert? Empower fans with live decision making during events.</li>" +
                "<li><b>And much more!</b></li>" +
                "</ul>",
        },
        {
            title: "Build community through competitive community action",
            desc: "<p>V3RIFIED unifies and gamifies the experience of being a fan in a competitive community.</p><ul>" +
                "<li><b>Challenges:</b> Provide tangible perks and recognition via gamified engagements.</li>" +
                "<li><b>Leaderboard:</b> Incentivise competition by rewarding fan’s with the greatest contributions.</li>" +
                "<li><b>Perks Trading:</b> Trade perks that are earned through participating in community challenges!</li>" +
                "<li><b>Public Profiles:</b> Highlight your achievements as a fan and share it with the wider community!</li>" +
                "</ul>",
        },
        {
            title: "Power back to true fans",
            desc: "<p>V3RIFIED is powered by upgradeable Dynamic NFTs that serves as a ticket and ID, fans are empowered to unlock more perks by continually engaging with the community.</p><ul>" +
                "<li><b>Connect Real-World Data:</b> Just reached 10M view on YouTube? Reward your community for hitting key milestones.</li>" +
                "<li><b>Integrate Insights:</b> Leverage valuable community insights to drive better decision making.</li>" +
                "<li><b>Privacy:</b> Programmable privacy gives event organizers greater flexibility for tokenized assets.</li>" +
                "</ul>",
        },
    ]

    const news = [
        {
            title: "Navigating the Future",
            desc: "The product roadmap for a V3RIFIED’s experience and social platform & its implications for KPOP fandoms.\n",
            link: 'https://beta.v3rified.io/p/roadmap-and-the-road-forward'
        }, {
            title: "Redefine the Culture",
            desc: "Our motivation for embarking on the journey to provide transformational value for genuine fans. \n",
            link: 'https://beta.v3rified.io/p/redefine-culture-mission-vision'
        }, {
            title: "The Power of Fandoms",
            desc: "Fandoms play a significant role in building social connections and excitement for creators.",
            link: 'https://beta.v3rified.io/p/the-power-of-fandoms'
        }
    ]


    function loopIntroIndex() {
        clearTimeout(introTimer);
        introTimer = setTimeout(() => {
            onChangeIndex(currentIndex + 1)
            loopIntroIndex();
        }, 5000);
    }


    function onScrollIntro(event) {
        let scrollLeft = event.target.scrollLeft;
        currentIndex = Math.floor(scrollLeft / window.innerWidth);
    }

    function onChangeIndex(index) {
        if (index === 4) {
            index = 0;
        }
        currentIndex = index;
        scrollIntroRef.scrollTo({left: window.innerWidth * index, behavior: 'smooth'})
    }

    onMount(() => {
        if (browser) {
            loopIntroIndex();
        }
    })

</script>
<style lang='postcss'>

    .root {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        scroll-behavior: smooth;
        white-space: nowrap;
        @apply snap-y snap-mandatory lg:snap-normal pt-[88px];
    }

    @keyframes -global-puff-in-center {
        0% {
            transform: scale(2);
            filter: blur(4px);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            filter: blur(0px);
            opacity: 1;
        }
    }


    @keyframes -global-h2 {
        0% {
            transform: translateY(100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }


    @keyframes -global-slide-right {
        0% {
            transform: translateX(100px);
            opacity: 0;
            text-align: center;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
            text-align: center;
        }
    }

    @keyframes -global-fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }


    .bg-queue-left {
        background: #0F2212;
        @apply flex flex-1 w-full h-full relative justify-center items-center;
    }


    .bg-queue-left img {
        opacity: 0;
        animation: change-img-anim 12s infinite;
    }

    .bg-queue-left img:nth-of-type(1) {
        animation-delay: 0s;
    }

    .bg-queue-left img:nth-of-type(2) {
        animation-delay: 3s;
    }

    .bg-queue-left img:nth-of-type(3) {
        animation-delay: 6s;
    }

    .bg-queue-left img:nth-of-type(4) {
        animation-delay: 9s;
    }

    @keyframes change-img-anim {
        0% {
            opacity: 0;
            transform: translateX(-50px);
            z-index: 0
        }
        25% {
            opacity: 1;
            transform: translateX(0px);
            z-index: 1
        }
        100% {
            opacity: 0;
            transform: translateX(0);
            z-index: 0
        }
    }

    .bg-queue-right {
        background: #0F2212;
        @apply flex flex-1 w-full h-full;
    }

    .ahead-container {
    }

    .skip-queue-container {
        @apply flex flex-1 flex-col h-full justify-center;
    }

    .button-skip {
        border-radius: 47px;
        border: 2px solid #1DD836;
        background: linear-gradient(279deg, #1DD836 -93.06%, rgba(217, 217, 217, 0.00) 53.08%);
        color: #1DD836;
        @apply text-xl font-bold px-10 h-[60px] mr-auto mt-[44px] flex items-center justify-center;
    }

    :global(.intro-desc) {
        @apply text-base lg:text-xl font-bold mt-4 lg:mt-[50px] flex flex-col gap-[30px];
    }

    :global(.intro-desc ul) {
        list-style: disc !important;
        font-weight: normal !important;
        @apply ml-[30px]
    }

    .indicator {
        width: 11px;
        height: 11px;
        background-color: white;
        border-radius: 11px;
    }

    .filter {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.44%, rgba(29, 216, 54, 0.11) 93.92%);
        @apply absolute w-[127vw] h-[127vw] top-[50vh] left-[-27vw];
    }

    .news-item {
        border-radius: 16.916px;
        border: 2px solid #398143;
        background: linear-gradient(105deg, rgba(57, 18, 63, 0.20) -11.5%, rgba(255, 255, 255, 0.00) 106.54%);
        box-shadow: 0px 3.38318px 3.38318px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(12.686915397644043px);
        @apply flex flex-col w-full lg:min-w-[28vw] p-6 gap-5;
    }

    .btn-view-post {
        border-radius: 40px;
        background: rgba(255, 255, 255, 0.20);
        @apply h-[54px] text-lg font-bold mt-10 flex items-center justify-center;
    }

    .btn-view-post:hover {
        background: linear-gradient(269deg, #1DD836 -30.4%, #043E0C 100.98%);

    }

    .news-title {
        background: -webkit-linear-gradient(0deg, #EBFF24 -4.04%, #1DD836 41.21%, #87E97C 118.65%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

    }

    .bg-news {
        @apply w-[85vw] h-[70vh] absolute bottom-0 left-[0];
    }

    .btn-community {
        border-radius: 30px;
        border: 1px solid #1DD836;
        background: linear-gradient(105deg, rgba(29, 216, 54, 0.18) -11.5%, rgba(151, 151, 151, 0.17) 106.54%);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(15px);
        color: white;
        @apply font-bold text-xl w-[70vw] lg:w-[308px] h-[62px];
    }

    .blur-news {
        background: linear-gradient(-90deg, #000 30.24%, rgba(0, 0, 0, 0.00) 90.93%);
        height: 100%;
        @apply hidden lg:flex absolute right-0 w-[30vw];
    }


</style>
<div class='root' id="root" bind:this={rootView}>
    <img class="absolute z-[1] w-[120vw] h-[220px] object-cover left-[0] lg:h-[unset] lg:left-0 lg:w-full"
         src="/images/top_bg.png"/>
    <HomeSection id="home" contentClass="!min-h-[unset] relative " class="!z-[3]">

        <div class="default-container z-[3] flex h-[180px] lg:h-[30vw] justify-center items-start gap-2.5">
            <Saos animation={"puff-in-center 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <Logo class="h-[60px] w-[134px] lg:w-[257px] lg:h-[115px]"/>
            </Saos>
            <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <h2 class="text-white text-opacity-100 lg:text-opacity-50 font-bold text-xs lg:text-base max-w-[519px] flex items-start">{'For the fan, by the fan experiences powered by Smart Ticketing and Community Action'}</h2>
            </Saos>
        </div>

    </HomeSection>

    <HomeSection id="queue" contentClass="!min-h-[unset]" class="mt-5 lg:mt-[-15px]">
        <div class="absolute z-0 flex flex-col lg:flex-row top-0 bottom-0 left-0 right-0">
            <div class="bg-queue-left !hidden lg:!flex">
                {#each [1, 2, 3, 4] as item}
                    <img alt="queue" src={`/images/queue_${item}.png`}
                         class="absolute object-cover mt-10 lg:mt-[unset] w-[90vw] rounded-[20px] lg:rounded-[unset] lg:w-full h-[81vw] lg:h-full transition-all"/>
                {/each}
            </div>

            <div class="bg-queue-left !flex lg:!hidden">
                {#each [1, 2, 3, 4] as item}
                    <img alt="queue" src={`/images/queue_mobile_${item}.png`}
                         class="absolute object-cover mt-10 lg:mt-[unset] w-[90vw] rounded-[20px] lg:rounded-[unset] lg:w-full h-[81vw] lg:h-full transition-all"/>
                {/each}
            </div>
            <div class="bg-queue-right"/>
        </div>
        <div class="default-container z-[1] flex !flex-col lg:!flex-row justify-center gap-2.5 lg:gap-[10vw] h-[500px] lg:h-[360px] mt-[80px] mb-[40px] lg:my-[118px]">
            <div class="flex flex-1 justify-center items-center ahead-container">

            </div>
            <div class="skip-queue-container">
                <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                    <span class="text-light">True fans face difficulties purchasing tickets due to scalpers and hidden fees, while web3 ticketing systems struggle to gain popularity among fans who prefer traditional methods.</span>
                </Saos>
                <button class="button-skip">Skip the Queue</button>
            </div>
        </div>

    </HomeSection>

    <HomeSection id="intro" contentClass="!min-h-[unset] lg:!min-h-[100vh]">
        <div class="flex lg:hidden mb-5 mt-10 ml-5">
            <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <h2 class="text-3rem font-bold font-okana ">Introducing <b class="text-[#1DD836]">V3RIFIED</b></h2>
            </Saos>
        </div>
        <div class="flex flex-row w-[100vw] h-[135vh] lg:h-[100vh] overflow-x-scroll snap-x snap-mandatory"
             bind:this={scrollIntroRef} on:scroll={onScrollIntro}>
            {#each intros as intro, index}
                <div class="min-w-[100vw] h-[100vh] scroll-smooth snap-center relative">
                    <img src="/images/bulb.png" class="absolute w-[120vw] object-cover lg:object-contain lg:w-[60vw] h-[100vh] z-[0] lg:right-[-6vw]"/>
                    <div class="default-container flex !flex-col-reverse lg:!flex-row items-center" let:Slide let:index>
                        <div class="flex flex-col h-full justify-center flex-1">
                            <div class="mt-5 lg:mt-0 hidden lg:flex">
                                <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                                    <h2 class="text-3rem font-bold font-okana ">Introducing <b
                                            class="text-[#1DD836]">V3RIFIED</b></h2>
                                </Saos>
                            </div>
                            <div class="mt-14 lg:mt-4">
                                <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                                    <span class="text-light text-base lg:text-xl ">{intro.title}</span>
                                </Saos>
                            </div>
                            <span class="intro-desc">{@html intro.desc}</span>
                            <a href="https://docs.v3rified.io/" target="_blank"
                               class="button-skip mt-5 w-[248px]">Docs</a>
                        </div>
                        <div class="flex-1 flex h-[100vh] lg:ml-[73px] justify-center items-center relative">

                            <Saos top="200" animation={"slide-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                                <img src={`/images/intro_${index+1}.png`}
                                     class="h-[300px] lg:h-[70vh] object-contain z-[1]"/>
                            </Saos>
                        </div>
                    </div>

                </div>
            {/each}
            <div class="flex no-scrollbar flex-row items-center absolute top-[450px] lg:bottom-[75px] mx-auto gap-2 w-full justify-center">
                {#each intros as i, index}
                    <button on:click={()=>onChangeIndex(index)}
                            class={`indicator ${currentIndex===index?'':'opacity-[0.57]'}`}></button>
                {/each}
            </div>
        </div>

    </HomeSection>

    <HomeSection id="people-saying">
        <img src="/images/bg_people.png" class="absolute w-[150vw] h-[100vh] object-fill lg:object-contain top-[10px] lg:top-[unset] lg:w-full lg:h-full z-0"/>
        <div class="default-container !px-0 z-[1] relative h-[120vh] lg:h-[120vh]">
            <div class="mx-auto mt-[100px] lg:mt-16">
                <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                    <h2 class="font-okana text-3rem   font-bold">What people are saying</h2>
                </Saos>
            </div>
            <PeopleCarousel/>
        </div>

    </HomeSection>

    <HomeSection id="news" contentClass="!min-h-[unset] lg:!min-h-[100vh]">
        <img class="bg-news" src="/images/bg_news.png"/>
        <div class="default-container z-[1] relative items-center lg:items-start justify-center lg:h-[100vh]">
            <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <h2 class="font-okana text-[2.25rem] font-bold">What We’re up to</h2>
            </Saos>
            <div class="max-w-[90vw] mb-10 lg:mb-[unset] lg:max-w-[80vw] lg:overflow-x-scroll">
                <div class="flex flex-col lg:flex-row gap-3 lg:gap-[30px] mt-10">
                    {#each news as item, index}
                        <div class="news-item">
                            <img src={`/images/news_${index+1}.png`} class="w-[100%] h-[150px] lg:h-[14.5vw]"/>
                            <span class="font-okana text-xl lg:text-[2.5rem] font-bold  leading-normal lg:mt-14 news-title">{item.title}</span>
                            <span class="tex-sm font-bold text-light leading-[176%]  lime-clamp-2">{item.desc}</span>
                            <a href={item.link} target="_blank" class="btn-view-post">View post</a>
                        </div>
                    {/each}
                    <div class="hidden lg:flex min-w-[20vw] h-[100px]"/>
                    <div class="blur-news"></div>
                </div>
            </div>
        </div>

    </HomeSection>

    <HomeSection id="community" contentClass="!min-h-[unset]">
        <img class={`w-full ${isBetaSignup?'h-[553px]':'h-[453px]'} absolute object-cover`} src="/images/bg_community.png"/>
        <div class={`default-container ${isBetaSignup?'h-[553px]':'h-[453px]'} z-[1] relative items-center justify-center`}>
            <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <h2 class="font-okana text-2xl lg:text-[2.25rem] font-bold leading-normal">{'Let’s build community together'}</h2>
            </Saos>
            <div class="mt-10">
                <Saos top="200" animation={"h2 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                    <h2 class="font-okana text-[#1DD836] text-base lg:text-[1.875rem] font-bold leading-normal">{'# FOR THE FANS BY THE FANS'}</h2>
                </Saos>
            </div>
            <div transition:scale={{
                        duration: 1000,
                        start: 0,
                        opacity:0
                    }}
                 class={`flex ${isBetaSignup?'flex-col justify-center items-center':'flex-col lg:flex-row'} gap-2.5 lg:gap-[41px] mt-10 mx-auto `}>

                {#if (isBetaSignup)}
                    <div class="flex flex-row" transition:scale={{
                        duration: 1000,
                        start: 0,
                        opacity:0
                    }}>
                        <iframe src="https://embeds.beehiiv.com/c3b2304e-07ac-42d6-8a5d-a3c360aafb51?slim=true"
                                data-test-id="beehiiv-embed" height="52" width="300" frameborder="0" scrolling="no"
                                style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe>
                    </div>
                    <span class="my-3 font-bold text-center mx-auto">Or</span>
                {:else}
                    <button class="btn-community" on:click={()=>isBetaSignup=true}>Beta Access Signup</button>
                {/if}
                <button class="btn-community">Partner With Us</button>
            </div>
        </div>
        <FooterComponent/>
    </HomeSection>

</div>