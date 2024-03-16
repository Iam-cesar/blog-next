interface RenderStringHtmlProps {
  value: string | undefined;
  className?: string;
}

const RenderStringHtml = ({ value, className }: RenderStringHtmlProps) => {
  if (!value) return <></>;

  return (
    <span dangerouslySetInnerHTML={{ __html: value }} className={className} />
  );
};

export { RenderStringHtml };
