interface Props {
  framework: string;
}

export default function SSR({ framework }: Props) {
  return <div>{framework} ssr example</div>;
}

export function getServerSideProps() {
  return {
    props: { framework: 'preact' },
  };
}
