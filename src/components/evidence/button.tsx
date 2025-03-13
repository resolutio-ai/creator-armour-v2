type buttonType = {
  text: string;
  className?: string;
  disabled: boolean;
  link?: string;
  isExternal?: boolean;
  onClick?: () => void;
};

export default function Button({
  text,
  className,
  disabled,
  link,
  isExternal,
  onClick,
}: buttonType) {
  return link ? (
    <a
      href={link}
      target={isExternal ? "_blank" : ""}
      className={`rounded-[4px] w-[100%] border border-[#5F437F] ${className}`}
    >
      {text}
    </a>
  ) : (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-[4px] w-[100%] border border-[#5F437F] ${className}`}
    >
      {text}
    </button>
  );
}

export function PrimaryButton({
  text,
  disabled,
  className,
  link,
  isExternal,
}: buttonType) {
  return (
    <Button
      text={text}
      className={`${className ?? ""} `}
      disabled={disabled}
      link={link}
      isExternal={isExternal}
    />
  );
}
