import flowLogo from '../../assets/flow-logo.svg';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'h-8 w-8 rounded-lg', md: 'h-10 w-10 rounded-xl', lg: 'h-12 w-12 rounded-2xl' };
  return <img src={flowLogo} alt="Flow logo" className={`${sizes[size]} shrink-0 shadow-lg shadow-indigo-600/20`} />;
}
