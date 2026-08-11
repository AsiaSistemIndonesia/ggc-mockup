import { CalendarDays, Zap } from 'lucide-react'

export function PageHeader({ title, description, actions }: { title: string, description: string, actions?: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-6">
      <div>
        <div className="text-[10px] tracking-[0.1em] text-[#7892A7] font-bold uppercase mb-1">
          {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} · {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
        </div>
        <h1 className="mt-[7px] mb-[5px] text-[27px] tracking-[-0.03em] text-[#173A5E] font-bold">{title}</h1>
        <p className="text-[13px] text-[#64748B] m-0">{description}</p>
      </div>
      <div className="flex gap-2.5 mt-4 md:mt-0">
        {actions ? actions : (
          <>
            <button className="flex min-h-[38px] items-center gap-2 rounded-lg border border-[#D8E2EA] bg-white px-[14px] text-[12px] font-bold text-[#173A5E] hover:bg-gray-50 flex-1 md:flex-none justify-center">
              <CalendarDays size={16} />
              <select className="appearance-none bg-transparent outline-none cursor-pointer">
                <option>Today</option>
                <option>This week</option>
                <option>This month</option>
              </select>
            </button>
            <button className="flex min-h-[38px] items-center gap-2 rounded-lg bg-[#1B7A3D] border border-[#1B7A3D] px-[14px] text-[12px] font-bold text-white hover:bg-[#166A34] flex-1 md:flex-none justify-center">
              <Zap size={16} /> Quick action
            </button>
          </>
        )}
      </div>
    </div>
  )
}
