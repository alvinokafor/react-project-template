import { Helmet } from "react-helmet-async";

interface IProps {
  title: string;
  name: string;
  content: string;
}

export default function SEOWrapper(metaData: IProps) {
  return (
    <>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name={metaData.name} content={metaData.content} />
      </Helmet>
    </>
  );
}
