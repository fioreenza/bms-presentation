type BodyProps = {
  children: React.ReactNode;
  center?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' ;
};

export const Body = ({
  children,
  center = true,
  size = 'xl',
}: BodyProps) => {
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  };

  return (
    <p className={`${sizeMap[size]} font-sans font-semibold text-gray-700 ${center ? 'text-center' : ''}`}>
      {children}
    </p>
  );
};
