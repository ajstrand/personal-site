const CodeDemo = ({error, children}) => {
  return (
    <div class={error ? "code-demo-error" : "code-demo stack gap-2"}>
      {children}
    </div>
  );
}

export default CodeDemo;