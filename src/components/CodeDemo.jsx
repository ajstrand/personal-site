const CodeDemo = ({error, children}) => {
  return (
    <div class={error ? "code-demo-error" : "code-demo"}>
      {children}
    </div>
  );
}

export default CodeDemo;