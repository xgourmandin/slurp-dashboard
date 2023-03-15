<div class="form-control w-full">
    <label class="label">
        <span class="label-text">Type</span>
    </label>
    <select name={category+".type"} bind:value={selectedType} class="select select-bordered w-full max-w-xs">
        {#if optional}
            <option value="none">None</option>
        {/if}
        {#each [...config.keys()] as key}
            <option value="{key}">{key}</option>
        {/each}
    </select>
    {#if config.has(selectedType) }
        <div class="grid grid-cols-3 gap-8">
            {#each [...new Map(Object.entries(config.get(selectedType)))] as [key, conf]}
                <div>
                    <label class="label" for={category+"."+key}>
                        <span class="label-text">{conf.label}</span>
                    </label>
                    {#if conf.type === 'boolean'}
                        <input type="checkbox" class="checkbox" id={category+"."+key} name={category+"."+key}
                               checked={value ? value[key] : false}/>
                    {:else}
                        <input type={conf.type} id={category+"."+key} name={category+"."+key} placeholder="Type here"
                               class="input input-bordered w-full max-w-xs"
                               value={value ? value[key] : ""}/>
                    {/if}
                    {#if conf.helper}
                        <label class="label">
                            <span class="label-text-alt">{conf.helper}</span>
                        </label>
                    {/if}
                </div>
            {/each}
        </div>
    {/if}
</div>

<script lang="ts">
    export let config;
    export let value;
    export let category;
    export let optional = false;
    let selectedType;

    if (value) {
        selectedType = value.type;
    } else if (optional) {
        selectedType = "none"
    } else {
        selectedType = config.keys().next().value
    }
</script>