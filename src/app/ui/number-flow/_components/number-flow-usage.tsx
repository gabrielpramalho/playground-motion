'use client'

import { useState } from 'react'
import { CardPricing } from './card'

export function NumberFlowUsage() {
  const [tabActive, setTabActive] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <nav className="flex border rounded-full border-zinc-50">
        <button
          type="button"
          data-active={tabActive === 'monthly'}
          onClick={() => setTabActive('monthly')}
          className="rounded-full px-4 py-1 data-[active=true]:bg-zinc-50 data-[active=true]:text-zinc-950 transition-all"
        >
          Monthly
        </button>
        <button
          onClick={() => setTabActive('yearly')}
          type="button"
          data-active={tabActive === 'yearly'}
          className="rounded-full px-4 py-1 data-[active=true]:bg-zinc-50 data-[active=true]:text-zinc-950 transition-all"
        >
          Yearly
        </button>
      </nav>
      <div className="flex gap-8">
        <CardPricing 
          title='Initial'
          monthlyPrice={19}
          yearlyPrice={180}
          tabActive={tabActive}
        />
        <CardPricing 
          title='Medium'
          monthlyPrice={49}
          yearlyPrice={390}
          tabActive={tabActive}
        />
        <CardPricing 
          title='Pro'
          monthlyPrice={89}
          yearlyPrice={799}
          tabActive={tabActive}
        />
      </div>
    </div>
  )
}
