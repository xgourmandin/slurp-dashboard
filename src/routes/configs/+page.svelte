<script lang="ts">
    import ApiTableActions from "./ApiTableActions.svelte";

    export let data;

    function deleteApi(evt: CustomEvent) {
        console.log(`Api ${evt.detail.id} deleted`);
    }
</script>

<div class="w-full">
    <div class="prose mb-8">
        <h1>Apis configurations</h1>
    </div>
    <table class="table w-full">
        <thead>
        <th>Name</th>
        <th>Endpoint</th>
        <th>Method</th>
        <th>Data type</th>
        <th>Configuration</th>
        <th>Output</th>
        <th></th>
        </thead>
        <tbody>
        {#each data.configurations as config, i}
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
                <ApiTableActions id={config.name} on:confirmed={deleteApi} />
            </td>
        </tr>
        {/each}
        </tbody>
    </table>
</div>