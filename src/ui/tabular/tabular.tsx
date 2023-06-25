import React from 'react';

export interface TabProps {
  id: number;
  title: string;
  active: boolean;
}

export interface TabularProps {
  tabTitles: TabProps[];
  searchPlaceholder: string;
  children?: React.ReactNode;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTabClick?: (tab: TabProps) => void;
}

export const Tabular = (props: TabularProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onInputChange) {
      props.onInputChange(event);
    }
  };

  const handleTabClick = (tab: TabProps) => {
    if (props.onTabClick) {
      props.onTabClick(tab);
    }
  };

  return (
    <div className={'tabular-container'}>
      <div className="ui attached tabular flex-column">
        <div className="ui top attached tabular menu tabular-tabs">
          {props.tabTitles.map((tab) => (
            <a
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`item ${tab.active ? 'active' : ''}`}
            >
              {tab.title}
            </a>
          ))}
        </div>
        <div className="search-bar">
          <div className="ui icon input">
            <input
              type="text"
              placeholder={props.searchPlaceholder}
              onChange={handleInputChange}
            />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
      <div className="ui bottom attached segment cocktail-list">
        {props.children}
      </div>
    </div>
  );
};
