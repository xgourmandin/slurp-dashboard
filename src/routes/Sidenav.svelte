<script>
    import { page } from '$app/stores';
    import Icon from '@iconify/svelte';
</script>

<div class="not-prose block min-w-fit md:flex md:flex-initial bg-base-200">
    <nav class="flex flex-row w-full md:flex-col gap-4">
        <span class="grow self-center md:grow-0 md:text-center md:w-full">Header logo</span>
        <ul class="menu menu-horizontal md:menu-vertical md:w-full">
            <li><a class:active="{$page.url.pathname === '/' }" href="/"><Icon icon="mdi:home" />Dashboard</a></li>
            <li><a class:active="{$page.url.pathname.startsWith('/configs')}" href="/configs"><Icon icon="mdi:gear" />Apis configurations</a></li>
        </ul>
    </nav>
</div>

