# vpw-test-env

Testing vite-plugin-wasm with different frameworks:

- svelte (CSR)
- sveltekit (SSR)

And in different scopes:

- Window scope
- Worker scope
- Worklet scope (audioworklet)
- Nodejs scope (vitest)

## Results

|         | Svelte | Sveltekit |
| ------- | ------ | --------- |
| Window  | ✅     | ❗        |
| Worker  | ✅     | ❗        |
| Worklet | ❗     | ❗        |
| Vitest  | ❗     | ❗        |
