<script lang="ts">
    import Icon from "@iconify/svelte";

    export let data;

    function deleteApi(evt: CustomEvent) {
        console.log(`Api ${evt.detail.id} deleted`);
    }
</script>

<div class="w-full">
    <div class="prose min-w-full mb-8 flex justify-between">
        <h1>History</h1>
        <a href="/configs/new" class="btn btn-primary"><Icon icon="mdi:plus"/>Launch manually</a>
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
                <td>{config.date}</td>
                <td>{config.data_count}</td>
                <td>{config.url}</td>
                <td>{config.method}</td>
                <td>{config.data_type}</td>
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