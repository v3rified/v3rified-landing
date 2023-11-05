<script>
    import FooterComponent from "$components/Footer/FooterComponent.svelte";
    import HomeSection from '$components/HomeSection/HomeSection.svelte';
    import PeopleCarousel from "$components/PeopleCarousel.svelte";
    import AheadNumber from "$icons/AheadNumber.svelte";
    import Logo from "$icons/Logo.svelte";


    export const prerender = false;
    let rootView;
    let showDarkHeaderBg = false;
    let scrollTop = 0;
    let currentIndex = 0;
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
            desc: "The product roadmap for a V3RIFIED’s experience and social platform & its implications for KPOP fandoms.\n"
        }, {
            title: "Redefine the Culture",
            desc: "Our motivation for embarking on the journey to provide transformational value for genuine fans. \n"
        }, {
            title: "The Power of Fandoms",
            desc: "Fandoms play a significant role in building social connections and excitement for creators."
        }
    ]



    function onScroll(event) {
        let windowHeight = window.innerHeight;
        scrollTop = event.target.scrollTop;
    }


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


    @keyframes -global-video-scale {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes -global-in {
        0% {
            transform: translateY(100px);
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

    @keyframes -global-fade-top {
        0% {
            transform: translateY(-50px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes -global-out {
        0% {
            transform: translateY(0);
            opacity: 1;
            text-align: center;
        }
        100% {
            transform: translateY(-100px);
            opacity: 0;
            text-align: center;
        }
    }

    .bg-queue-left {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), linear-gradient(to bottom right, rgba(27, 110, 38, 0.60) 0%, rgba(39, 201, 60, 0.60) 15%, rgba(135, 233, 124, 0.60) 31%, rgba(22, 88, 58, 0.60) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, rgba(27, 110, 38, 0.60) 0%, rgba(39, 201, 60, 0.60) 15%, rgba(135, 233, 124, 0.60) 31%, rgba(22, 88, 58, 0.60) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, rgba(27, 110, 38, 0.60) 0%, rgba(39, 201, 60, 0.60) 15%, rgba(135, 233, 124, 0.60) 31%, rgba(22, 88, 58, 0.60) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, rgba(27, 110, 38, 0.60) 0%, rgba(39, 201, 60, 0.60) 15%, rgba(135, 233, 124, 0.60) 31%, rgba(22, 88, 58, 0.60) 50%) top right / 50% 50% no-repeat;
        @apply flex flex-1 w-full h-full;
    }

    .bg-queue-right {
        background: #0F2212;
        @apply flex flex-1 w-full h-full;
    }

    .ahead-container {
        border-radius: 20px;
        border: 1px solid #1F4B25;
        background: linear-gradient(105deg, rgba(57, 18, 63, 0.20) -11.5%, rgba(255, 255, 255, 0.00) 106.54%);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(15px);
        @apply lg:mr-[80px] py-[42px];
    }

    .skip-queue-container {
        @apply flex flex-1 flex-col h-full justify-center
    }

    .button-skip {
        border-radius: 47px;
        border: 2px solid #1DD836;
        background: linear-gradient(279deg, #1DD836 -93.06%, rgba(217, 217, 217, 0.00) 53.08%);
        color: #1DD836;
        @apply text-xl font-bold px-10 h-[60px] mr-auto mt-[44px];
    }

    :global(.intro-desc) {
        @apply text-sm lg:text-xl font-bold mt-[50px] flex flex-col gap-[30px];
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
        @apply flex flex-col w-full lg:w-[31vw] p-6;
    }

    .btn-view-post {
        border-radius: 40px;
        background: rgba(255, 255, 255, 0.20);
        @apply h-[54px] text-lg font-bold mt-10;
    }

    .btn-view-post:hover {
        background: linear-gradient(269deg, #1DD836 -30.4%, #043E0C 100.98%);

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
        @apply font-bold text-xl w-[308px] h-[62px];
    }


</style>
<div class='root' id="root" bind:this={rootView} on:scroll={onScroll}>
    <img class="absolute z-[1] w-[120vw] h-[46vw] left-[0] lg:h-full lg:left-0 lg:w-full" src="/images/top_bg.png"/>
    <HomeSection id="home" contentClass="!min-h-[unset] relative " class="!z-[3]">

        <div class="default-container z-[3] flex h-[30vw] justify-center items-start gap-2.5">
            <Logo  class="h-[60px] w-[134px] lg:w-[257px] lg:h-[115px]"/>
            <h2 class="text-light text-xs lg:text-base max-w-[519px]">For the fan, by the fan experiences powered by Smart Ticketing and Community Action </h2>
        </div>

    </HomeSection>

    <HomeSection id="queue" contentClass="!min-h-[unset]" class="mt-5 lg:mt-[-15px]">
        <div class="absolute z-0 flex flex-col lg:flex-row top-0 bottom-0 left-0 right-0">
            <div class="bg-queue-left"/>
            <div class="bg-queue-right"/>
        </div>
        <div class="default-container z-[1] flex !flex-col lg:!flex-row justify-center gap-2.5 h-[360px] my-[118px]">
            <div class="flex flex-1 justify-center items-center ahead-container">
                <AheadNumber/>
            </div>
            <div class="skip-queue-container">
                <span class="text-light">True fans face difficulties purchasing tickets due to scalpers and hidden fees, while web3 ticketing systems struggle to gain popularity among fans who prefer traditional methods.</span>
                <button class="button-skip">Skip the Queue</button>
            </div>
        </div>

    </HomeSection>

    <HomeSection id="intro" contentClass="!min-h-[unset] lg:!min-h-[100vh]">
        <div class="flex flex-row w-[100vw] h-[100vh] overflow-x-scroll snap-x snap-mandatory">
            {#each intros as intro, index}
                <div class="min-w-[100vw] h-[100vh] scroll-smooth snap-center relative">
                    <img src="/images/bulb.png" class="absolute w-[60vw] h-[100vh] z-[0] right-[-6vw]"/>
                    <div class="default-container flex !flex-col-reverse lg:!flex-row items-center" let:Slide let:index>
                        <div class="flex flex-col h-full justify-center flex-1">
                            <h2 class="text-3rem font-bold font-okana mt-5 lg:mt-0">Introducing <b class="text-[#1DD836]">V3RIFIED</b></h2>
                            <span class="text-light text-xl mt-4">{intro.title}</span>
                            <span class="intro-desc">{@html intro.desc}</span>
                            <button class="button-skip mt-5 w-[248px]">Docs</button>
                        </div>
                        <div class="flex-1 flex h-[100vh] lg:ml-[73px] justify-center items-center relative">

                            <img src={`/images/intro_${index+1}.png`} class="h-[300px] lg:h-[70vh] object-contain z-[1]"/>
                        </div>
                    </div>

                </div>
            {/each}
            <div class="flex flex-row items-center absolute bottom-[75px] mx-auto gap-2 w-full justify-center">
                {#each intros as i, index}
                    <div class={`indicator ${currentIndex===index?'':'opacity-[0.57]'}`}/>
                {/each}
            </div>
        </div>

    </HomeSection>

    <HomeSection id="people-saying">
        <img src="/images/bg_people.png" class="absolute w-full h-full z-0"/>
        <div class="default-container !px-0 z-[1] relative">
            <h2 class="font-okana text-3rem mx-auto mt-16 font-bold">What people are saying</h2>
            <PeopleCarousel/>
        </div>

    </HomeSection>

    <HomeSection id="news" contentClass="!min-h-[unset] lg:!min-h-[100vh]">
        <img class="bg-news" src="/images/bg_news.png"/>
        <div class="default-container z-[1] relative justify-center lg:h-[100vh]">
            <h2 class="font-okana text-[2.25rem] font-bold">What We’re up to</h2>
            <div class="flex flex-col lg:flex-row w-full gap-3 lg:gap-[30px] overflow-x-scroll mt-10">
                {#each news as item, index}
                    <div class="news-item">
                        <img src={`/images/news_${index+1}.png`} class="w-[100%] h-[150px] lg:h-[14.5vw]"/>
                        <span class="font-okana text-xl lg:text-[2.5rem] font-bold mt-5 leading-normal lg:mt-14">{item.title}</span>
                        <span class="tex-sm font-bold text-light leading-[176%] mt-5">{item.desc}</span>
                        <button class="btn-view-post">View post</button>
                    </div>
                {/each}
            </div>
        </div>

    </HomeSection>

    <HomeSection id="community" contentClass="!min-h-[unset]">
        <img class="w-full h-[453px] absolute" src="/images/bg_community.png"/>
        <div class="default-container h-[453px] z-[1] relative items-center justify-center">
            <h2 class="font-okana text-2xl lg:text-[2.25rem] font-bold leading-normal">Let’s build community together</h2>
            <h2 class="font-okana text-[#1DD836] text-lg lg:text-[1.875rem] mt-10 font-bold leading-normal"># FOR THE FANS BY THE FANS</h2>
            <div class="flex flex-row gap-[41px] mt-10 mx-auto ">
                <button class="btn-community">Beta Access Signup</button>
                <button class="btn-community">Partner With Us</button>
            </div>
        </div>
        <FooterComponent/>
    </HomeSection>

</div>