<script lang="ts">
  import Icon from "@iconify/svelte";
  import moment from "moment";
  import { invalidateAll } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  function formatDate(date: string): string {
    const parsed = moment(date);
    const now = moment();
    if (now.diff(parsed, "days") > 1) {
      return parsed.format("D MMM YYYY [at] HH:mm:ss");
    } else {
      return parsed.fromNow();
    }
  }

  function refresh() {
    invalidateAll();
  }

</script>

<div class="w-full">
  <div class="prose min-w-full mb-8 flex justify-between">
    <h1>History</h1>
    <div>
      <a on:click|preventDefault={refresh} class="btn btn-primary">
        <Icon icon="mdi:refresh" />
      </a>
      <a href="/launch" class="btn btn-primary">
        <Icon icon="mdi:plus" />
        Launch manually</a>
    </div>
  </div>
  <table class="table w-full">
    <thead>
    <th>Name</th>
    <th>Date</th>
    <th>Data scooped</th>
    <th>Url</th>
    <th>Method</th>
    <th>Data type</th>
    <th>Output type</th>
    <th>Configuration</th>
    </thead>
    <tbody>
    {#each data.history as config, i}
      <tr>
        <td>{config.name}</td>
        <td>{formatDate(config.date)}</td>
        <td>{config.data_count}</td>
        <td>{config.url}</td>
        <td>{config.method}</td>
        <td>{config.data}</td>
        <td>{config.output}</td>
        <td>
          {#if config.with_pagination}<span class="badge">paginated</span>{/if}
          {#if config.with_auth}<span class="badge">authenticated</span>{/if}
        </td>
      </tr>
    {/each}
    </tbody>
  </table>
</div>