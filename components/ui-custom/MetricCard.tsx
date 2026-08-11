export function MetricCard({ label, value, unit, trend, icon: Icon, tone = 'green', note }: any) {
  const tones = {
    green: 'bg-[#E0F2E5] text-[#1B7A3D]',
    blue: 'bg-[#E1EEF8] text-[#2872A6]',
    amber: 'bg-[#FFF0D5] text-[#B47711]',
    navy: 'bg-[#E7EDF3] text-[#173A5E]',
  }

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-[0_2px_5px_rgba(23,58,94,0.035)] p-[18px_20px]">
      <div className="flex justify-between items-start gap-3">
        <span className="text-[#64748B] text-[11px]">{label}</span>
        <span className={`flex h-[30px] w-[30px] items-center justify-center rounded-lg ${tones[tone as keyof typeof tones]}`}>
          <Icon size={16} />
        </span>
      </div>
      <div className="mt-3.5 text-[#173A5E] text-[28px] font-extrabold tracking-[-0.04em]">
        {value}
        <small className="text-[13px] font-bold tracking-normal text-[#64748B] ml-1">{unit}</small>
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-[#94A3B8]">
        <span className={trend?.startsWith('+') ? 'text-[#1B7A3D] font-extrabold' : 'text-[#C77A00] font-extrabold'}>
          {trend}
        </span>
        <span>{note}</span>
      </div>
    </div>
  )
}
