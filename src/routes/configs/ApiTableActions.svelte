<script lang="ts">

    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


    export let id: string;
    let open = false;

    function toggle() {
        open = !open
    }
    function confirm() {
        dispatch('confirmed', {
            id: id
        });
    }

</script>

<div class="btn-group">
    <button class="btn btn-sm">
        <Icon icon="mdi:pause" />
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
        <p class="py-4">You are about to delete API {id}. Do you want to proceed ?</p>
        <div class="modal-action">
            <label for="delete-modal-{id}" class="btn" on:click={confirm}>Yes, Delete</label>
            <label for="delete-modal-{id}" class="btn">Nope, my bad</label>
        </div>
    </div>
</div>
