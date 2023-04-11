<script lang="ts">
    import ApiForm from "../../ApiForm.svelte";
    import {translateError} from "$lib/error_translator";
    import type { ActionData, PageData } from "./$types";

    export let data: PageData;
    export let form: ActionData;
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