<script>
    import {onMount} from "svelte";

    let imgRef;
    const imgs = [1,2,3,4,5];
    let index=Math.floor(imgs.length/2);

    function updateIndex(i){
        index=i;
        layout()
    }
    function layout() {
        console.log('imgRef.childList',imgRef.children[0])
        const xOffsetStep = 100;
        const count = imgs.length;
        const scaleStep = 0.6;
        const opacityStep = 0.5;

        for(let i = 0; i < imgs.length; i++){
          let  img = imgRef.children[i];
            const sign = Math.sign(i - index);

            let xOffset = (i - index) * xOffsetStep;
            if(i!==index) {
                xOffset = xOffset + 80 * sign;
            }
            const scale = scaleStep ** Math.abs(i - index);
            const rotateY = i === index ? 0 : 30 * -sign;
            img.style.transform = `perspective(800px) translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`;

            let opacity = opacityStep ** Math.abs(i - index);
            if(Math.abs(i - index) > 2) {
                opacity = 0
            }
            img.style.opacity = opacity;

            img.style.zIndex = count - Math.abs(index - i);

        }
    }

    onMount(()=>{
        layout()
    })
</script>

<style lang="scss">
  .frame {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 200px;
  }

  .cards {
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .card {
    width: 474px;
    height: 474px;
    background-color: #87A0E2;
    border-radius: 16px;
    position: absolute;
    user-select: none;
    transition-property: transform, opacity, zIndex ;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    @apply hover:opacity-70;
  }

  .card img {
    width: 100%;
  }

</style>


<div class="frame">
    <div class="cards" bind:this={imgRef}>
        <div id="card1" class="card" on:click={()=>updateIndex(0)}>
            <img src="/images/news/1.png"/>
        </div>

        <div id="card2" class="card" on:click={()=>updateIndex(1)}>
            <img src="/images/news/2.png"/>
        </div>

        <div id="card3" class="card" on:click={()=>updateIndex(2)}>
            <img src="/images/news/3.png"/>
        </div>

        <div id="card4" class="card" on:click={()=>updateIndex(3)}>
            <img src="/images/news/4.png"/>
        </div>

        <div id="card5" class="card" on:click={()=>updateIndex(4)}>
            <img src="/images/news/5.png"/>
        </div>

    </div>
</div>
