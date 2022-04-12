<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                message: error.message,
                status // same as status: status
            }
        };
    }
  </script>
  
  <script>
    // import ErrorScreen from '../components/screens/ErrorScreen.svelte'; // your own Error screen component
    // import NotFoundScreen from '../components/screens/NotFoundScreen.svelte'; // your own 404 screen component
  
    export let message;
    export let status;
  </script>
  
  {#if status == 404} 
    <!-- <NotFoundScreen /> -->
    <h2>Error {status}: {message}</h2>
  {:else}
    <!-- <ErrorScreen {message} {status} /> -->
    <h2>Error {status}: {message}</h2>
  {/if}