<script>
    import HomeSection from "$components/HomeSection/HomeSection.svelte";
    import Saos from "saos";

    let currentIndex = 0;
    let timer;
    let scrolling = false;
    let whatScroller;
    let isNext = false;
    export let isActive = false;
    const sentences = [
        {
            title: "에코모드(걷기) & 스포츠 모드(러닝)",
            desc: "각자의 걷거나 뛴 기록들을 측정할 수 있으며, 스포츠 모드에서는 랭킹을 통하여 다른 유저들과 경쟁할 수 있습니다.<br>" +
                "<br>" +
                "헬스 데이터를 기반으로 유저들이 어떠한 컨디션으로 걷고 뛰었는지 모니터링할 수 있으며, 데이터 수집과 활용을 통하여 유저 맞춤 서비스를 제공합니다.<br>" +
                "<br>" +
                "러닝 히스토리를 모두 보관하며 본인이 언제, 어디서, 어떻게 달렸는지 확인할 수 있고, SNS를 통해 본인의 러닝 히스토리를 공유할 수 있습니다."

        },
        {
            title: "개인 챌린지 & 크루 경쟁전",
            desc: '재미 요소를 더한 크루들만을 위한 그들의 공간과 끊임없는 챌린지.<br/>' +
                '<br/>' +
                '유저들은 개인 챌린지를 통하여 개인의 목표를 설정하고, 목표를 달성하며 성취감과 건강을 얻을 수 있습니다. 개인의 목표 수준을 고려하여 달성 시 보상이 정해질 예정이며, 목표를 달성하지 못한 유저들에게는 패널티가 주어질 예정입니다.<br/>' +
                '<br/>' +
                '러닝 크루들은 크루 경쟁전으르 통하여 주간 누적 거리, 계주와 같은 다양한 팀플레이를 경험할 수 있습니다. 소액의 참가비를 내고 참가하여 순위권에 들어갈 시에는 보상이 주어질 에정입니다.'

        },
        {
            title: "러닝크루들을 위한 크루룸",
            desc: '개인 러너들은 스스로 챌린지를 설정하고 스스로의 한계를 부시고 나아가게끔, 러닝 크루들은 다른 크루들과의 경쟁전을 통하여 더 재밌게 달릴 수 있습니다.<br/>' +
                '<br/>' +
                '오프라인 마라톤 및 이벤트에서 다양한 굿즈와 스폰서를 제공합니다.<br/>' +
                '<br/>' +
                '크루의 색깔이 뚜렷하게 잘 나타낼 수 있도록 활동적인 사진, 다이내믹한 영상들을 통하여 다른 러너들에게 공유해 줄 예정이고, 다양한 인스타그램, 트위터 및 SNS에서는 크루 활동을 지원할 것입니다.'

        }
    ]
    let currentSen = sentences[currentIndex]

    const debounce = (event) => {
        if (scrolling) return;
        console.log("event", event.deltaY)
        const root = document.getElementById('root');
        if (event.deltaY > 0) {
            scrolling = true
            if (currentIndex < sentences.length - 2) {
                root.classList.add('overflow-y-hidden')
                root.classList.remove('overflow-y-scroll')
                currentIndex++;
            } else {
                if (currentIndex < sentences.length - 1) {
                    currentIndex++;
                }
                isNext = true;
                whatScroller.classList.remove('overflow-y-scroll')
                whatScroller.classList.add('overflow-y-hidden')
                root.classList.add('overflow-y-scroll')
                root.classList.remove('overflow-y-hidden')
            }

            clearTimeout(timer);
            timer = setTimeout(() => {
                scrolling = false;
            }, 1000);
        }

    }


</script>

<style lang="postcss">
    .snap {
        scroll-snap-type: y mandatory;
        white-space: nowrap;
        overflow-y: scroll;
    }

    .why-container {
        backdrop-filter: blur(2px);
        width: 100vw;
        @apply z-[1] flex flex-col;
    }

    .auto-break {
        word-wrap: break-word; /* IE 5.5-7 */
        white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
        white-space: pre-wrap; /* current browsers */
    }

    .item-container {
        scroll-snap-align: center;
        height: 100vh;
        @apply flex justify-center items-center gap-8;
    }

</style>
<HomeSection bgImage="/images/bg_why_can_do.png" id="what-can-do">
    <div class="h-[100vh] w-full overflow-y-scroll snap">
        <div class="why-container relative" bind:this={whatScroller}
             on:wheel={debounce}>
            {#each sentences as sen, index}
                <div class="default-container item-container !flex-row auto-break">
                    <img src={`/images/what_can_do/${index+1}.png`} width="344" height="370"
                         class="object-contain ml-[-200px]"/>
                    <div class="flex flex-col flex-1 max-w-[682px] text-left">
                        <Saos top="100" animation={"h2 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                            <h2 class="font-kotra text-left">{sen.title}</h2>
                        </Saos>
                        <Saos top="300" animation={"description 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                            <div class="text-lg text-left leading-[25px] font-pretendard mt-[25px]">
                                {@html sen.desc}
                            </div>
                        </Saos>
                    </div>
                </div>
            {/each}
        </div>
        <div class="z-[2] font-roboto absolute top-[20vh] default-container left-0 right-0 !mx-auto">
            <Saos once top="200" animation={"description 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <h2 class="text-left">WHAT YOU CAN DO</h2>
            </Saos>
        </div>
    </div>
</HomeSection>