import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#7B61FF] border-[#7B61FF] bg-[#7B61FF10]">🚀 Долетим быстрее всех</Badge>,
    title: "Такси, которое летит к вам.",
    showButton: true,
    buttonText: 'Заказать такси'
  },
  {
    id: 'about',
    custom: 'about',
  },
  {
    id: 'fleet',
    custom: 'fleet',
  },
  {
    id: 'stats',
    title: '500 000 довольных пассажиров.',
    content: 'Более 2 миллионов поездок совершено без единого серьёзного инцидента. Рейтинг 4.9 из 5 по отзывам клиентов.'
  },
  {
    id: 'team',
    custom: 'team',
  },
  {
    id: 'contacts',
    custom: 'contacts',
  },
]