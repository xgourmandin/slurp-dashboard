<script>
    import '../app.css'
    import Sidenav from './Sidenav.svelte'
</script>

<div class="flex flex-col md:flex-row gap-8 min-h-screen">
    <Sidenav />
    <div class="container mx-auto flex flex-col grow mt-0 ml-6 md:ml-0 md:mt-6">
        <slot></slot>
    </div>
</div>
