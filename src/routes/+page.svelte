<script>
 import {db} from './db.js' ;

  var nameA ;
  var nameB ;
  $: mimi = [];


async function cici(){await db.friends.add({ name: nameA, lastName: nameB});}

async function kiki(){var zizi = await db.friends.toArray();  mimi = zizi ;}


</script>

<div class="container">
   <h1 class="chi">Lets Check Dexie Cloud !!!</h1>
   <div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control" bind:value={nameA}>
  <input type="text" aria-label="Last name" class="form-control" bind:value={nameB}>
</div>
<br>
   <button class="btn btn-danger" on:click={cici}>Hello</button>
   <br>
   <button class="btn btn-primary" on:click={kiki}>Show List</button>
</div>

{#each mimi as item}
		<li>{item.name}</li>
	{/each}

<style>
  .chi{
	text-align: center;
  } 
</style>