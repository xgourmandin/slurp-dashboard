<script lang="ts">
  export let data;
</script>

<form class="mt-8" method="POST">
  <div class="w-full">
    <div class="prose min-w-full mb-8 flex justify-between">
      <h1>Launch an API slurping</h1>
    </div>
    <div class="form-control w-full max-w-xs">
      <label class="label" for="name">
        <span class="label-text">API</span>
      </label>
      <select id="name" name="name" class="select select-bordered w-full max-w-xs">
        {#each data?.configurations as config, i}
          <option value={config.name}>{config.name}</option>
        {/each}
      </select>
    </div>
    <div class="divider"></div>
    <section class="flex flex-row justify-between mb-8">
      <button type="submit" class="btn btn-primary w-24">Launch</button>
      <a href="/" class="btn btn-secondary w-24">Cancel</a>
    </section>
  </div>
</form>