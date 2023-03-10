<script lang="ts">
    import ApiTableActions from "./ApiTableActions.svelte";
    import Icon from "@iconify/svelte";

    export let data;

    function deleteApi(evt: CustomEvent) {
        console.log(`Api ${evt.detail.id} deleted`);
    }
</script>

<div class="w-full">
    <div class="prose min-w-full mb-8 flex justify-between">
        <h1>Apis configurations</h1>
        <a href="/configs/new" class="btn btn-primary"><Icon icon="mdi:plus"/>Create</a>
    </div>
    <table class="table w-full">
        <thead>
        <th>Name</th>
        <th>Endpoint</th>
        <th>Method</th>
        <th>Data type</th>
        <th>Configuration</th>
        <th>Output</th>
        <th>Active</th>
        <th></th>
        </thead>
        <tbody>
        {#each data?.configurations as config, i}
        <tr>
            <td>{config.name}</td>
            <td>{config.url}</td>
            <td>{config.method}</td>
            <td>{config.data_type}</td>
            <td>
                {#if config.paginated}<span class="badge">paginated</span>{/if}
                {#if config.authenticated}<span class="badge">authenticated</span>{/if}
            </td>
            <td>
                {config.output_type}
            </td>
            <td>
                <div class="badge badge-sm" class:badge-success={config.active} class:badge-error={!config.active}></div>
            </td>
            <td>
                <ApiTableActions id={config.name} on:confirmed={deleteApi} bind:active={config.active} />
            </td>
        </tr>
        {/each}
        </tbody>
    </table>
</div>