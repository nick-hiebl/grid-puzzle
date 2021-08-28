export function image(path: string) {
  return `${process.env.PUBLIC_URL}/${path}`;
}

interface CaptionedImageProps {
  caption: string;
  src: string;
  id: string;
  isBlack?: boolean;
}

export const TO_BLACK = 'brightness(0) saturate(100%)';

export const CaptionedImage = (props: CaptionedImageProps) => (
  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <img
      alt={props.caption}
      aria-labelledby={`${props.id}-alt`}
      src={image(props.src)}
      style={{ filter: props.isBlack ? TO_BLACK : '' }}
    />
    <p id={`${props.id}-alt`}>
      {props.caption}
    </p>
  </div>
);
