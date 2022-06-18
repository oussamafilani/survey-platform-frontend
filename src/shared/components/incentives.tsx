/* This example requires Tailwind CSS v2.0+ */
import {CalendarIcon, RefreshIcon, TruckIcon} from '@heroicons/react/outline'

const perks = [
  {
    name: '10-year all-inclusive warranty',
    description: 'We’ll replace it with a new one',
    icon: CalendarIcon,
  },
  {
    name: 'Free shipping on returns',
    description: 'Send it back for free',
    icon: RefreshIcon,
  },
  {
    name: 'Free, contactless delivery',
    description: 'The shipping is on us',
    icon: TruckIcon,
  },
]

export default function Incentives() {
  return (
    <div className="bg-white">
      <h2 className="sr-only">Our perks</h2>
      <div className="max-w-7xl mx-auto divide-gray-200 pt-8">
        {perks.map(perk => (
          <div className="lg:py-0 my-4" key={`iIncentives-${perk.name}`}>
            <div className="max-w-xs mx-auto px-4 flex lg:max-w-none lg:px-8 pb-2">
              {<perk.icon className="flex-shrink-0 h-8 w-8 text-indigo-600" />}
              <div className="ml-4 flex-auto flex flex-col">
                <h3 className="font-medium text-gray-900">{perk.name}</h3>
                <p className="text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
