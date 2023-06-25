// it's actually a breadcrumb
import React from 'react';

export interface HeaderProps {
  // ['Home', 'Cocktails List']
  // the last one in the path list is the active one
  paths: string[];
  className?: string;
}
export const Header = (props: HeaderProps) => {
  return (
    <div className={'ui breadcrumb ' + props.className}>
      {props.paths.map((path, index) => (
        <React.Fragment key={index}>
          {index === props.paths.length - 1 ? (
            <div className="active section">{path}</div>
          ) : (
            <div className="section">{path}</div>
          )}
          {index !== props.paths.length - 1 && (
            <div className="divider"> / </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
