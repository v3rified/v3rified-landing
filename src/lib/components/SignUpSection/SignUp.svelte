<script>
	import Modal from "$components/Modal/Modal.svelte";

	let email = '';
	let success = false;

	async function sendEmail() {
		success = true;
		const res = await fetch(`/api?email=${email}`, {
			method: 'GET',
		})
		if (res.ok) {
			email = '';
			success = true;
		}
		console.log({res})
	}

</script>

<style lang='postcss'>

	.email-input {
		background: rgba(255, 255, 255, 0.2);
		border: 1px solid #FFFFFF;
		backdrop-filter: blur(5px);
		border-radius: 16px;
		@apply px-10 py-4 w-full lg:w-[464px];
	}

</style>
<div class='flex flex-col w-full lg:flex-row lg:justify-center gap-5 mt-10'>
	<input bind:value={email} type="email" placeholder='이메일 주소를 입력해주세요.' class='email-input'/>
	<button on:click={sendEmail} class='px-10 py-4 bg-black rounded-[16px]'>소식 받기</button>
</div>

<Modal bind:showModal={success}>
	<div class="flex flex-col gap-8 justify-center lg:items-center px-8 py-5">
		<h1 class="text-[4rem]">🎉</h1>
		<span class="text-2xl montserrat">Thank you for registering!</span>
	</div>
</Modal>