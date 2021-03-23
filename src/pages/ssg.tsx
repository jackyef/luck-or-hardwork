interface Props {
  framework: string;
}

export default function SSG({ framework }: Props) {
  return <div>{framework} ssg example</div>;
}

export function getStaticProps() {
  return {
    props: { framework: 'preact' },
  };
}
