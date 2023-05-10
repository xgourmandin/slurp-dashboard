<form class="mt-8" method="POST">
    <section>
        <h2>General</h2>
        <div class="flex flex-row gap-8">
            <input type="hidden" name="active" value={value ? value.active : true}>
            {#if value}
                <input type="hidden" name="name" value={value.name}/>
            {/if}
            <div class="form-control w-full max-w-xs">
                <label class="label" for="name">
                    <span class="label-text">Name</span>
                </label>
                <input type="text" id="name" name="name" placeholder="Api name" class="input input-bordered w-full max-w-xs"
                       value={value ? value.name : ""} disabled={value}/>
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label" for="url">
                    <span class="label-text">Endpoint</span>
                </label>
                <input type="url" id="url" name="url" placeholder="Api name" class="input input-bordered w-full max-w-xs"
                       value={value ? value.url : ""}/>
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label" for="method">
                    <span class="label-text">Method</span>
                </label>
                <select bind:value={selectedMethod} id="method" name="method" class="select select-bordered w-full max-w-xs">
                    <option value="GET" selected={selectedMethod === "GET"}>GET</option>
                    <option value="POST">POST</option>
                </select>
            </div>
        </div>
    </section>
    <div class="divider"></div>
    <section>
        <h3>Data configuration</h3>
        <ApiFormGroup config={dataConfig} value={value ? value.data : null} category="data"/>
    </section>
    <div class="divider"></div>
    <section>
        <h3>Authentication configuration</h3>
        <ApiFormGroup config={authConfig} value={value ? value.auth : null} category="auth" optional="true"/>
    </section>
    <div class="divider"></div>
    <section>
        <h3>Pagination configuration</h3>
        <ApiFormGroup config={paginationConfig} value={value ? value.pagination : null} category="pagination"
                      optional="true"/>
    </section>
    <div class="divider"></div>
    <section>
        <h3>Output configuration</h3>
        <ApiFormGroup config={outputConfig} value={value ? value.output : null} category="output" optional="true"/>
    </section>
    <div class="divider"></div>
    <section class="flex flex-row justify-between mb-8">
        <button type="submit" class="btn btn-primary w-24">Save</button>
        <a href="/configs" class="btn btn-secondary w-24">Cancel</a>
    </section>
</form>

<script lang="ts">

    import ApiFormGroup from "./ApiFormGroup.svelte";

    export let formConfig = {};
    export let value;

    let parsedConfig: Map<string, any> = new Map(Object.entries(formConfig))

    let dataConfig = new Map(Object.entries(parsedConfig.get("data")))
    let authConfig = new Map(Object.entries(parsedConfig.get("authentication")))
    let paginationConfig = new Map(Object.entries(parsedConfig.get("pagination")))
    let outputConfig = new Map(Object.entries(parsedConfig.get("output")))
    let selectedMethod;
    if (value) {
        selectedMethod = value.method;
    } else {
        selectedMethod = "GET";
    }


</script>