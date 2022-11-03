import * as React from "react";

type PageProps = {
  heading: React.ReactNode;
  children?: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ heading, children }) => {
  return (
    <main>
      <h1>{heading}</h1>
      <div>{children}</div>
    </main>
  );
};
