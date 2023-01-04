# vpw-test-env

Testing vite-plugin-wasm v3.1.0 with different frameworks:

- svelte (CSR)
- sveltekit (SSR)

In different scopes:

- Window scope
- Worker scope
- Worklet scope (audioworklet)
- Nodejs scope (vitest)

And with different web browers:

- Chrome 108
- Firefox 108
- Gnome web (aka Epiphany) 43

## Results

### Chrome

|         | Svelte | Sveltekit |
| ------- | ------ | --------- |
| Window  | ✅     | ❗        |
| Worker  | ✅     | ❗        |
| Worklet | ❗     | ❗        |
| Vitest  | ❗     | ❗        |

### Firefox

|         | Svelte | Sveltekit |
| ------- | ------ | --------- |
| Window  | ✅     | ❗        |
| Worker  | ❗     | ❗        |
| Worklet | ❗     | ❗        |
| Vitest  | ❗     | ❗        |

### Gnome web

|         | Svelte | Sveltekit |
| ------- | ------ | --------- |
| Window  | ✅     | ❗        |
| Worker  | ✅     | ❗        |
| Worklet | ❗     | ❗        |
| Vitest  | ❗     | ❗        |
