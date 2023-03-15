<script lang="ts">

    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from 'svelte';
    import { invalidateAll } from "$app/navigation";

    export let id: string;
    export let active: boolean;
    let open = false;

    function toggle() {
        open = !open
    }
    async function confirm() {
        await fetch("/configs", {
            method: "DELETE",
            body: JSON.stringify({
                name: id
            }),
            headers: {
                'content-type': 'application/json'
            }
        });
        await invalidateAll();
    }

    async function toggleApiActivation() {
        await fetch("/configs", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                activate: !active
            }),
            headers: {
                'content-type': 'application/json'
            }
        });
        active = !active
    }

</script>

<div class="btn-group">
    <button class="btn btn-sm" on:click={toggleApiActivation}>
        <Icon icon="mdi:{active ? 'pause': 'play'}" />
    </button>
    <a href="/configs/{id}/edit" class="btn btn-sm">
        <Icon icon="mdi:edit"/>
    </a>
    <button on:click={toggle} class="btn btn-sm">
            <Icon icon="mdi:delete" />
    </button>
</div>

<input type="checkbox" bind:checked={open} class="modal-toggle" id="delete-modal-{id}">
<div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h3 class="font-bold text-lg">WARNING!</h3>
        <p class="py-4">You are about to delete API {id}. <br/>Do you want to proceed ?</p>
        <div class="modal-action">
            <label for="delete-modal-{id}" class="btn" on:click={confirm}>Yes, Delete</label>
            <label for="delete-modal-{id}" class="btn">Nope, my bad</label>
        </div>
    </div>
</div>
