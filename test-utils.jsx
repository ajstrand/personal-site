import { render } from '@testing-library/preact'

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@testing-library/preact'
// export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }