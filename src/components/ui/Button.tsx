type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const styles = {
    primary: 'bg-pink-500 hover:bg-pink-600 text-white',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-700',
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-full
        rounded-3xl
        py-4
        font-semibold
        transition-colors
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
