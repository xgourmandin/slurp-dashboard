<script lang="ts">
    import ApiForm from "../../ApiForm.svelte";
    import {translateError} from "$lib/error_translator";

    /** @type {import('./$types').PageData} */
    export let data;
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div class="prose max-w-full">
    <h1>Edit API history</h1>
    {#if form?.has_errors}
        <h3 class="text-accent">There are errors in the history :</h3>
        <ul>
            {#each form?.errors as error}
                <li>Field "{error.field}" {translateError(error)}</li>
            {/each}
        </ul>
        <div class="divider"></div>
    {/if}
    <ApiForm value={data.configuration} formConfig={data.formConfig} />
</div>