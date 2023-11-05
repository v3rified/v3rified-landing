<script>
    export let type;
    export let href;
</script>
<style lang="scss">
  .buttons {
    text-align: center;
    border-radius: 30px;
    @apply hover:opacity-100;

  }

  $cyan: #00FFD4;
  $dark: rgba(255, 255, 255, 0.30);
  $borderW: 2px;

  .blob-btn {
    $numOfBlobs: 4;
    z-index: 1;
    position: relative;
    color: $cyan;
    outline: none;
    border: none;
    transition: color 0.5s;
    width: 330px;
    cursor: pointer;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.30);
    @apply flex items-center text-left gap-[22px] py-[21px] px-[43px] font-semibold text-[1.375rem] leading-[30px];

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 30px;
      padding: 3px;
      background: linear-gradient(120deg, #00FFD4 0%, #1B332E 100%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, /* [1] */
      linear-gradient(#fff 0 0); /* [2] */
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    &:after {
      content: "";
      z-index: -2;
      position: absolute;
      left: $borderW*1.5;
      top: $borderW*1.5;
      width: 100%;
      height: 100%;

      transition: all 0.3s 0.2s;
      border-radius: 30px;
    }


    &:hover {
      color: #000;
      border-radius: 30px;

      &:after {
        transition: all 0.3s;
        left: 0;
        top: 0;
        border-radius: 30px;
      }

      svg {
        path {
          fill: #000 !important;
        }
      }
    }


    &__inner {
      z-index: -1;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      //background: #ffffff;
    }

    // additional container created, because in FF blobs are breaking overflow:hidden of element with svg gooey filter
    &__blobs {
      position: relative;
      display: block;
      height: 100%;
      filter: url('#goo');
    }

    &__blob {
      position: absolute;
      top: $borderW;
      width: 100% / $numOfBlobs;
      height: 100%;
      background: $cyan;
      border-radius: 100%;
      transform: translate3d(0, 150%, 0) scale(1.7);
      transition: transform 0.45s;

      @supports (filter: url('#goo')) {
        transform: translate3d(0, 150%, 0) scale(1.4);
      }

      @for $i from 1 through $numOfBlobs {
        &:nth-child(#{$i}) {
          left: ($i - 1) * (120% / $numOfBlobs);
          transition-delay: ($i - 1) * 0.08s;
        }
      }

      .blob-btn:hover & {
        transform: translateZ(0) scale(1.7);

        @supports (filter: url('#goo')) {
          transform: translateZ(0) scale(1.4);
        }
      }
    }

  }

</style>
<a class="buttons" href={href} target="_blank">
    <button class="blob-btn">
        {#if (type === 'android')}
            <svg class="svg-filter" xmlns="http://www.w3.org/2000/svg" width="50" height="56" viewBox="0 0 50 56"
                 fill="none">
                <path d="M32.506 25.2742L8.59241 1.40232L39.018 18.7911L32.506 25.2742ZM2.35127 0C0.942673 0.733523 0 2.07112 0 3.80785V51.4113C0 53.148 0.942673 54.4856 2.35127 55.2191L30.1547 27.6042L2.35127 0ZM48.4231 24.3357L42.0411 20.6573L34.9223 27.615L42.0411 34.5726L48.5531 30.8942C50.5034 29.3517 50.5034 25.8782 48.4231 24.3357ZM8.59241 53.8276L39.018 36.4388L32.506 29.9558L8.59241 53.8276Z"
                      fill="#00FFD4"/>
            </svg>
        {:else }
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 50 60" fill="none">
                <path d="M41.8039 31.4426C41.7774 26.5675 43.9825 22.8879 48.4458 20.178C45.9485 16.6047 42.1759 14.6387 37.1945 14.2535C32.4787 13.8815 27.3247 17.0032 25.4384 17.0032C23.4458 17.0032 18.8762 14.3863 15.2896 14.3863C7.87726 14.5058 0 20.2976 0 32.0802C0 35.5606 0.637619 39.156 1.91286 42.8666C3.61318 47.7418 9.75027 59.6971 16.153 59.4979C19.5005 59.4182 21.865 57.1201 26.2221 57.1201C30.4463 57.1201 32.6381 59.4979 36.3709 59.4979C42.8268 59.4049 48.3794 48.5388 50 43.6504C41.339 39.5723 41.8039 31.695 41.8039 31.4426ZM34.2853 9.63071C37.9118 5.32678 37.5797 1.40808 37.4734 0C34.2721 0.185972 30.5659 2.17853 28.4538 4.63603C26.1291 7.26621 24.7609 10.5207 25.0531 14.187C28.5202 14.4527 31.6817 12.6727 34.2853 9.63071Z"
                      fill="#00FFD4"/>
            </svg>
        {/if}
        <slot/>
        <span class="blob-btn__inner">
      <span class="blob-btn__blobs">
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
      </span>
    </span>
    </button>
    <br/>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                               result="goo"></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
        </defs>
    </svg>
</a>