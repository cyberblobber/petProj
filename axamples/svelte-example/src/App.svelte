<script lang="ts">
	import { Dashboard, DashboardModal, DragDrop, ProgressBar } from '@petProj/svelte'
	import petProj from '@petProj/core'
	import Webcam from '@petProj/webcam'
	import XHRUpload from '@petProj/xhr-upload'

	const createpetProj = () => {
		return new petProj().use(Webcam).use(XHRUpload, {
			bundle: true,
			endpoint: 'http://localhost:9967/upload',
			allowedMetaFields: ['something'],
			fieldName: 'files',
		})
	}

	let petProj1 = createpetProj()
	let petProj2 = createpetProj()

	let open = false;
	let showInlineDashboard = true;
</script>

<main>
	<h1>Welcome to the <code>@petProj/svelte</code> demo!</h1>
	<h2>Inline Dashboard</h2>
	<label>
      <input
        type="checkbox"
				bind:checked={showInlineDashboard}
			/>
      Show Dashboard
	</label>
	{#if showInlineDashboard}
		<Dashboard
			petProj={petProj1}
			plugins={['Webcam']}
		/>
	{/if}
	<h2>Modal Dashboard</h2>
	<div>
		<button on:click={() => open = true}>Show Dashboard</button>
		<DashboardModal
			petProj={petProj2}
			open={open}
			props={{
				onRequestCloseModal: () => open = false,
				plugins: ['Webcam']
			}}
		/>
	</div>

	<h2>Drag Drop Area</h2>
	<DragDrop
		petProj={petProj1}
	/>

	<h2>Progress Bar</h2>
	<ProgressBar
		petProj={petProj1}
		props={{
			hideAfterFinish: false
		}}
	/>
</main>
<style global>
	@import "@petProj/core/dist/style.min.css";
	@import "@petProj/dashboard/dist/style.min.css";
	@import "@petProj/drag-drop/dist/style.min.css";
	@import "@petProj/progress-bar/dist/style.min.css";
	input[type="checkbox"] {
		user-select: none;
	}
</style>
