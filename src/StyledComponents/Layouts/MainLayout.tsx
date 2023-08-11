type MainLayoutPropsType = {
  children: React.ReactNode;
};
export default function MainLayout(props: MainLayoutPropsType) {
  return (
    <main className="flex justify-center items-center min-h-50">
      <section>{props.children}</section>
    </main>
  );
}
