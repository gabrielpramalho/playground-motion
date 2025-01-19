import NumberFlow from '@number-flow/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

interface CardPricingProps {
  title: string
  monthlyPrice: number
  yearlyPrice: number
  tabActive?: 'yearly' | 'monthly'
}

export function CardPricing({
  title,
  monthlyPrice,
  tabActive = 'monthly',
  yearlyPrice,
}: CardPricingProps) {
  const [priceShow, setPriceShow] = useState(monthlyPrice)

  useEffect(() => {
    if (tabActive === 'monthly') {
      setPriceShow(monthlyPrice)
    } else {
      setPriceShow(yearlyPrice)
    }
  }, [tabActive, monthlyPrice, yearlyPrice])

  return (
    <Card className="p-4 w-[340px]">
      <CardHeader>
        <CardTitle className="text-5xl">
          <NumberFlow
            value={priceShow}
            format={{
              style: 'currency',
              currency: 'USD',
              trailingZeroDisplay: 'stripIfInteger',
            }}
            suffix={tabActive === 'monthly' ? '/mo' : '/y'}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <strong className='text-lg mb-2'>{title}</strong>

        <ul>
          <li className='flex gap-2 items-center'>
            <Check size={14} />
            Lorem ipsum dolor.
          </li>
          <li className='flex gap-2 items-center'>
            <Check size={14} />
            Lorem ipsum dolor.
          </li>
          <li className='flex gap-2 items-center'>
            <Check size={14} />
            Lorem ipsum dolor.
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
