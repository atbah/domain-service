<script lang="ts">
  export let src: string
  export let alt: string = ''
  export let size: string = "md"

  let imageSize = 32
  switch(size) {
    case 'sm':
      imageSize = 20
      break
    case 'sm':
      imageSize = 24
      break
    case 'xl':
      imageSize = 36
      break
    case 'lg':
      imageSize = 40
      break
  }
</script>

<img class="rounded-full" src={src} alt={alt || 'avatar'} style="width: {imageSize}px; height: {imageSize}px" />
