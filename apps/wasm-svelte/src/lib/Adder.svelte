<script lang="ts">
  import { add } from "./wasm_package";
  const a = 5;
  const b = 12;
</script>

<div>
  {a} + {b} is {add(a, b)}.
</div>
