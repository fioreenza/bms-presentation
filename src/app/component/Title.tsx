type TitleProps = {
  children: React.ReactNode;
  center?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
  gradient?: boolean;
};

const sizeClasses: Record<NonNullable<TitleProps['size']>, string> = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
};

export const Title = ({
  children,
  center = true,
  size = '5xl',
}: TitleProps) => (
  <h1 className={`${center ? 'text-center' : ''} text-gray-900 leading-snug font-sans font-bold ${sizeClasses[size]}`}>
    {children}
  </h1>
);
