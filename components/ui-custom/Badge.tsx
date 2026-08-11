export function Badge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'success' | 'warning' | 'critical' | 'info' | 'neutral' }) {
  const styles = {
    success: 'text-[#187037] bg-[#E1F2E5]',
    warning: 'text-[#9B6504] bg-[#FFF1D8]',
    critical: 'text-[#A83228] bg-[#FBE5E2]',
    info: 'text-[#27678F] bg-[#E3F0F8]',
    neutral: 'text-[#64748B] bg-[#F1F5F8]',
  }
  
  return (
    <span className={`inline-flex items-center justify-center w-max rounded-[5px] px-[7px] py-[4px] text-[9px] font-extrabold tracking-[0.02em] ${styles[tone]}`}>
      {children}
    </span>
  )
}
