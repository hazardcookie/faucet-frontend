<script lang="ts">
  import { loading } from '$lib/components/loading';
  import images from '$lib/constants/images.json';

  $: if ($loading.status === 'NAVIGATING') {
    setTimeout(() => {
      if ($loading.status === 'NAVIGATING') {
        $loading.status = 'LOADING';
      }
    }, 400);
  }
</script>

{#if $loading.status === 'LOADING'}
  <img src={images.wealth} alt="loading" />
  {#if $loading.message}
    <p>{$loading.message}</p>
  {/if}
{/if}

<style>
  img {
    --size: 100px;
    position: fixed;
    top: 0;
    left: 0;
    inset: calc(50% - calc(var(--size) / 2));
    border-radius: var(--size);
    height: var(--size);
    width: var(--size);
    animation: moveLoader 1.3s infinite alternate;
  }

  @media only screen and (max-width: 600px) {
    img {
      position: relative;
      inset: calc(55% - calc(var(--size) / 2));
    }
  }

  @keyframes moveLoader {
    from {
      transform: translate3d(150px, 0, 0);
    }
    to {
      transform: translate3d(-150px, 0, 0);
    }
  }
</style>
