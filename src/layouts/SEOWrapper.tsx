import React from "react";
import { Helmet } from "react-helmet-async";

interface IProps {
  children: React.ReactNode;
  metaData: { title: string; name: string; content: string };
}

export default function SEOWrapper({ children, metaData }: IProps) {
  return (
    <>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name={metaData.name} content={metaData.content} />
      </Helmet>
      {children}
    </>
  );
}
