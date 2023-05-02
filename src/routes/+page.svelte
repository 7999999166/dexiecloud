<script>
 import {db} from './db.js' ;

  var nameA ;
  var nameB ;


async function cici(){await db.friends.add({ name: nameA, lastName: nameB});}


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
</div>

<style>
  .chi{
	text-align: center;
  } 
</style>