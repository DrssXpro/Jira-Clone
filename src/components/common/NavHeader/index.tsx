import ThemeLogo from "@/components/theme/ThemeLogo";

export default function NavHeader(props: { rightOperator?: React.ReactNode }) {
  const { rightOperator } = props;
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <ThemeLogo />
        <div className="font-bold text-2xl">Jira Clone</div>
      </div>
      {rightOperator && <div className="flex items-center gap-4">{rightOperator}</div>}
    </nav>
  );
}
