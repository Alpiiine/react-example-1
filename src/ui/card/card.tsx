export interface CardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  linkUrl: string;
  linkDescription: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={props.imageUrl} />
      </div>
      <div className="content">
        <a className="header">{props.title}</a>
        <div className="meta">
          <span>{props.subtitle}</span>
        </div>
        <div className="description">{props.description}</div>
      </div>
      <div className="extra content">
        {props.linkUrl ? (
          <a className={'url'} href={props.linkUrl}>
            {props.linkDescription}
          </a>
        ) : (
          <div>{props.linkDescription}</div>
        )}
      </div>
    </div>
  );
};

export const CardPlaceholder = () => {
  return (
    <div className="ui card" data-testid="ui-card-placeholder">
      <div className="image">
        <div className="ui placeholder">
          <div className="square image"></div>
        </div>
      </div>
      <div className="content">
        <div className="ui placeholder">
          <div className="header">
            <div className="very short line"></div>
            <div className="medium line"></div>
          </div>
          <div className="paragraph">
            <div className="short line"></div>
          </div>
        </div>
      </div>
      <div className="extra content">
        <div className="ui placeholder">
          <div className="short line"></div>
        </div>
      </div>
    </div>
  );
};
